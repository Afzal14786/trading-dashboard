import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar"

const MainLayout = () => {
    return (
        <div>
            <header>
                <Sidebar/>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;