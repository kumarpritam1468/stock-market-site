import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className=' flex'>
            <div className=' max-md:hidden relative z-10'>
                <Sidebar />
            </div>
            <div className=' pl-[30vw] max-md:pl-0 relative z-0'>
                <DashboardNavbar />
                <Outlet /> {/* This is where the page content will be rendered */}
            </div>
        </div>
    );
}

export default DashboardLayout;