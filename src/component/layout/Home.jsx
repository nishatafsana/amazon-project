import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* 2 header k niya outlook mice jano sob path ak sathe hoi */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;