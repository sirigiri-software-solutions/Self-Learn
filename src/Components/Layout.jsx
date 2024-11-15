import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'; // To render nested routes
import './Homepage.css'; // Add layout-specific styles

const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Layout;
