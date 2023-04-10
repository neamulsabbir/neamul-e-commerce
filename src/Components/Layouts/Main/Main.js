import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../SharedFile/Navbar/Navbar';
import Footer from '../../SharedFile/Footer/Footer';
import BottomNavbar from '../../SharedFile/BottomNavbar/BottomNavbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default Main;