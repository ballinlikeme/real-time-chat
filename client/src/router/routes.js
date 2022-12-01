import { CHAT_ROUTE, LOGIN_ROUTE, PICKER_ROUTE, REGISTER_ROUTE } from "../utils/constants";
import Login from "../pages/Auth"
import Register from "../pages/auth/Register"
import Chat from "../pages/Chat"
import RoomPicker from "../pages/RoomPicker"

export const authRoutes = [
    {
        path: CHAT_ROUTE + "/:id",
        Component: <Chat />
    },

    {
        path: PICKER_ROUTE,
        Component: <RoomPicker />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login />
    },

    {
        path: REGISTER_ROUTE,
        Component: <Login />
    }
]