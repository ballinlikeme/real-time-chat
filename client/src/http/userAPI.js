import { $authHost, $host } from "./http";
import jwt_decode from "jwt-decode";

export const registration = async (username, password) => {
    const {data} = await $host.post('api/user/register', {
        username, password
    })
    localStorage.setItem('token', data);
    return jwt_decode(data);
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/user/login', {
        username, password
    })

    localStorage.setItem('token', data);
    return jwt_decode(data);
}

export const checkAuth = async () => {
    const {data} = await $authHost.get('api/user/check')
    return data;
}