import { LOGIN_ERRORS } from "../utils/constants";

function loginErrorHandler(message) {
    if (message === LOGIN_ERRORS.PASSWORD) return "password"
    if (message === LOGIN_ERRORS.USERNAME) return "username"
}

export default loginErrorHandler;