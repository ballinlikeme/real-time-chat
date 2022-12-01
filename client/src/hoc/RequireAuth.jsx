import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const isAuth = useSelector(state => state.auth.isAuth);

    if(!isAuth) return <Navigate to="/login" state={{from: location.pathname}} />
    return children;
}
export default RequireAuth;