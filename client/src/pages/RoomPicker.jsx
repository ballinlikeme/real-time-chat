import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setRoomId } from "../redux/slices/chatSlice";
import Input from "../components/forms/Input";
import FormContainer from "../components/forms/styled/FormContainer";
import PageContainer from "../components/forms/styled/PageContainer";
import PageWrapper from "../components/forms/styled/PageWrapper";
import Title from "../components/forms/Title";
import Button from "../components/forms/Button";

const RoomPicker = () => {
    const [number, setNumber] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const joinRoom = (event) => {
        event.preventDefault();
        dispatch(setRoomId(number));
        navigate(`/chat/${number}`);
    }    

    return (
        <PageWrapper>
            <PageContainer>
                <Title>Now you need to enter a room number.</Title>
                <FormContainer>
                    <Input placeholder={"Room number"} value={number} setter={setNumber} error={false}/>
                    <Button callback={joinRoom}>Connect</Button>
                </FormContainer>
            </PageContainer>
        </PageWrapper>
    )
}

export default RoomPicker;