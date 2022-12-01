import React, { useEffect, useState } from "react";
import FormContainer from "../components/forms/styled/FormContainer";
import FormHeader from "../components/forms/styled/FormHeader";
import PageWrapper from "../components/forms/styled/PageWrapper";
import PageContainer from "../components/forms/styled/PageContainer";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import TextInForm from "../components/forms/TextInForm";
import {useDispatch} from "react-redux";
import { setUser, setAuth } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useLocation, } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import loginErrorHandler from "../handlers/loginErrorHandler";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = location.pathname == "/login"

    useEffect(() => {
        setError('');
    }, [username, password])

    const click = async (event) => {
        event.preventDefault()
        try {
            let user;
            if (isLogin) {
                user = await login(username, password)
            } else {
                user = await registration(username, password);
            }
            dispatch(setUser(user))
            dispatch(setAuth(true));
            return navigate(location?.state?.from || "/");
        } catch (error) {
            setError(loginErrorHandler(error.response.data.message));
        }
    }
    return (
        <PageWrapper>
            <PageContainer>
                <FormHeader>{isLogin ? "Login" : "Registration"}</FormHeader>
                <FormContainer>
                    <Input 
                        type={"text"} 
                        placeholder={"Username"} 
                        value={username} 
                        setter={setUsername} 
                        error={
                            error === "username" ? true : false
                        }
                    />
                    <Input 
                        type={"password"} 
                        placeholder={"Password"} 
                        value={password} 
                        setter={setPassword}
                        error={
                            error === "password" ? true : false
                        }
                    />
                    <Button callback={click}>{isLogin ? "Login" : "Register"}</Button>
                    <TextInForm>{isLogin ? "Not a memeber?" : "Already have an account?"} <Link to={isLogin ? "/register" : "/login"}>{isLogin ? "Register" : "Login"}</Link></TextInForm>
                </FormContainer>
            </PageContainer>
        </PageWrapper>
    )
}

export default Login;