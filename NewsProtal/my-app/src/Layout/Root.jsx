import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/sheard/navber/Naveber';


const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Navber></Navber>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;