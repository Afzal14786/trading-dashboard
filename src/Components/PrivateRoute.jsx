import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar"; // Import Sidebar directly

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('accessToken'); 

    // If the user is NOT authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user IS authenticated, render the main layout and the outlet
    return (
        <div>
            <header>
                <Sidebar />
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default PrivateRoute;