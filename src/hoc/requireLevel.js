import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const RequireLevel = ({ children }) => {
    const disabled = useSelector(state => state.changePage.disabled);

    if (!disabled) {
        return <Navigate to='/end' />
    }

    return children;
}

export { RequireLevel };