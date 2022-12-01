import React from "react";
import {Routes, Route} from "react-router-dom";
import Auth from "../pages/Auth";
import Chat from "../pages/Chat";
import RoomPicker from "../pages/RoomPicker";
import RequireAuth from "../hoc/RequireAuth";

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={
                    <RequireAuth>
                        <RoomPicker />
                    </RequireAuth>    
                } />   
                <Route path="login" element={<Auth />} />
                <Route path="register" element={<Auth />} />
                <Route path="chat/:id" element={
                    <RequireAuth>
                        <Chat />
                    </RequireAuth>
                } />
            </Routes>
    )
}

export default Router;