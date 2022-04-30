import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {name, img, call} = expert;
    return (
        <div className=' all-expert-class'>
            <div className='our-single-expert'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <hr></hr>
                HotLine: {call} <br></br>
                <button className='host-button'>Host Without Query</button>
            </div>
        </div>
    );
};

export default Expert;