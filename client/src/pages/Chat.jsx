import React, {useState, useRef, useEffect} from "react";
import StyledChatContainer from "../components/chat/styled/StyledChatContainer";
import PageWrapper from "../components/forms/styled/PageWrapper";
import Header from "../components/chat/Header";
import StyledMessageContainer from "../components/chat/styled/message/StyledMessageContainer";
import Message from "../components/chat/Message";
import Input from "../components/chat/Input";
import StyledChatAreaContainer from "../components/chat/styled/StyledChatAreaContainer";
import {useDispatch, useSelector} from "react-redux";
import {setRoomId} from "../redux/slices/chatSlice";
import {useParams} from "react-router";
import {checkAuth} from "../http/userAPI";
import {setUser} from "../redux/slices/authSlice";
import connectToWebSocket from "../socket/socket";
import {sendToWebSocket, connectionMessage} from "../socket/socket";
import ConnectionMessage from "../components/chat/styled/message/ConnectionMessage";

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState(useSelector(store => store.auth.username));
    const [members, setMembers] = useState(0);

    const dispatch = useDispatch();
    const { id } = useParams();
    const roomId = useSelector(store => store.chat.roomId)
    const socket = useRef();

    useEffect(() => {
        if (!roomId) dispatch(setRoomId(id))
        if (!username) {
            checkAuth()
                .then(userData => {
                        dispatch(setUser(userData.username))
                        setUsername(userData.username)
                        connectToWebSocket(socket, id, userData.username, setMessages, setMembers)
                    }
                )
        }

    }, []);


    const sendMessage = (event) => {
        if (event.key === "Enter") {
            sendToWebSocket(socket.current, roomId, username, message)
            setMessage('');
        }
    }

    return (
        <PageWrapper>
            <StyledChatContainer>
                <Header room={id} members={members}/>
                <StyledChatAreaContainer>
                    <StyledMessageContainer>

                        {messages.map((msg, index) => {
                            if (msg.event === "connection") return <ConnectionMessage key={index}>User {msg.username} connected</ConnectionMessage>
                            return <Message key={index} name={msg.username} text={msg.message} />
                        })}
                    </StyledMessageContainer>
                    <Input
                        placeholder="Enter your message"
                        value={message}
                        setter={setMessage}
                        callback={sendMessage}
                    />
                </StyledChatAreaContainer>
            </StyledChatContainer>
        </PageWrapper>
    )
}

export default Chat;