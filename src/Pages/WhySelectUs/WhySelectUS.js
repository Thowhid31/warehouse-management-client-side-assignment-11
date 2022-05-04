import React from 'react';
import whyUs from '../../images/why-us.jpg'
import './WhySelectUs.css'

const WhySelectUS = () => {
    return (
        <div className='container whole-root-class-for-why-select-us'>
            <h1 style={{ color: 'purple', margin: '30px' }}>Why You Choice Us Product?</h1>
            <div className='class-of-whole-card w-100'>
                <div>
                    <img className='w-100' src={whyUs} alt="" />
                </div>
                <div className='card-for-why-select w-100'>
                    <div class="card card-3">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <h2 class="card__title">We can ensure you that, Our all product gives you full of satisfaction and work friendly uses. If You want to know our product refund policy and also want to read terms and condition, please click the 'About Us' below.</h2>
                        <p class="card__apply">
                            <br/>
                            <a class="card__link" href="/about"> About Us <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySelectUS;