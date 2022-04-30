import React from 'react';
import NotFount404Photo from '../../../images/footer/404-error-with-portals-pana.png'
import './Not404.css'

const Not404 = () => {
    return (
        <div>
            <img className='error-image' src={NotFount404Photo} alt="" />
        </div>
    );
};

export default Not404;