import { Navigate, Outlet } from "react-router-dom";


function ProtectRoute({children}) {
    const user = JSON.parse(localStorage.getItem("isLoggedIn"));
    const initialState = user ? { isLoggedIn : true } : { isLoggedIn : false }
    const isAuthenticated = initialState.isLoggedIn;
    
    // const history = {
    //     navigate: null,
    //     location: null
    // }

    if (!isAuthenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/signin" />;
    }
    // authorized so return child components
    return <div>{children}</div>;
}
export default ProtectRoute;