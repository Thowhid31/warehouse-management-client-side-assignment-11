import React from 'react';
import './Exparts.css'

import expert1 from '../../../images/experts/Home-Expert_800x800.jpg'
import expert2 from '../../../images/experts/All-in-One_800x800.jpg'
import expert3 from '../../../images/experts/Online-Expert_800x800.jpg'
import expert4 from '../../../images/experts/Construct_800x800.jpg';
import Expert from '../Expart/Expert';

const expertsHumble = [
    {id: 1, name: 'Home Expert', img: expert1, call: '017000222'},
    {id: 2, name: 'All in 1 Expert', img: expert2, call: '017000222'},
    {id: 3, name: 'Online Expert', img: expert3, call: '017000222'},
    {id: 4, name: 'Construction Expert', img: expert4,  call: '017000222'}
]


const Experts = () => {
    return (
        <div className='container'>
            <h1 className='our-experts'>Our Dynamic Experts</h1>
            <div className='expert-all-container'>
                {
                    expertsHumble.map(expert => <Expert key={expertsHumble.id}
                    
                    expert={expert}></Expert> )
                }
            </div>
        </div>
    );
};

export default Experts;