import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductFor1Show.css'

const ProductFor1Show = ({ product }) => {
    const navigate = useNavigate()


    const handleAddNew = () => {
        navigate('/addItems')
    }

    const { img, name, description, price } = product;
    return (
            <div className='single-product'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> handleAddNew()} className='btn btn-primary add-new-class'>Add New</button>
        </div>
   



    );
};



export default ProductFor1Show;