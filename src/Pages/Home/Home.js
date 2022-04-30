import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBannerl';
import Experts from '../Products/Experts/Experts';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <Products></Products>
            <Experts></Experts>

        </div>
    );
};

export default Home;