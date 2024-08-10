import React from 'react'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
            <Outlet /> {/* This is where the page content will be rendered */}
        </>
    );
}

export default DashboardLayout;