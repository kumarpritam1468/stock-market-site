import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className=' flex'>
            <Sidebar />
            <div className=' pl-[30vw]'>
                <DashboardNavbar />
                <Outlet /> {/* This is where the page content will be rendered */}
            </div>
        </div>
    );
}

export default DashboardLayout;