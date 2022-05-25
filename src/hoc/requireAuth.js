import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useSelector(state => state.user.authorization);

    if (!auth) {
        return <Navigate to='/signin' state={{ from: location }} />
    }

    return children;
}

export { RequireAuth };