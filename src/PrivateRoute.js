import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const auth = JSON.parse(localStorage.getItem("user"));
    console.log(!!auth)
    return auth ? children : <Navigate to="/login" />;
}
export default PrivateRoute