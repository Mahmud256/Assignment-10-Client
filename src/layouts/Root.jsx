import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Headre/Navbar/NavBar';

const Root = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            
            <div className=" mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;