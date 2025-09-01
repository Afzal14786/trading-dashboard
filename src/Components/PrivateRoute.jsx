import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('accessToken'); 
    return isAuthenticated ? <MainLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;