import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet /> {/* This is where the page content will be rendered */}
            <Footer />
        </>
    );
}

export default Layout