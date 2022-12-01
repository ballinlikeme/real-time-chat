function connectToWebSocket(ref, roomId, username, setMessages, setMembers) {
    ref.current = new WebSocket(process.env.REACT_APP_WS_URL);

    ref.current.onopen = (event) => {
        connectionMessage(ref.current, roomId, username);
    }

    ref.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        console.log(message);
        setMessages(prev => [...prev, message]);
    }

    ref.current.onclose = () => {
        console.log('socket closed')
    }

    ref.current.onerror = () => {
        console.log('socket error')
    }
}

export function sendToWebSocket(socket, roomId, username, message) {
        const msg = {
            event: "message",
            id: Date.now(),
            roomId: roomId,
            username: username,
            message: message
        }
        const stringifiedMessage = JSON.stringify(msg);
        socket.send(stringifiedMessage);
}

function connectionMessage(socket, roomId, username) {
    const msg = {
        event: "connection",
        id: Date.now(),
        roomId: roomId,
        username: username
    }
    const stringifiedMessage = JSON.stringify(msg);
    socket.send(stringifiedMessage);
}

export default connectToWebSocket;