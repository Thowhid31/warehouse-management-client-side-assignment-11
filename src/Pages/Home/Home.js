import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBannerl';
import Experts from '../Products/Experts/Experts';
import Products from '../Products/Products';
import WhySelectUS from '../WhySelectUs/WhySelectUS';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <Products></Products>
            <Experts></Experts>
            <WhySelectUS></WhySelectUS>

        </div>
    );
};

export default Home;