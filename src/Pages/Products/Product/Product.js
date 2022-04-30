import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const {id, img, name, description, price } = product;

    const navigate = useNavigate();
    const updateBtnNavigate = id => {
        navigate(`/product/${id}`)
    }

    
    return (
        <div className='single-product'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> updateBtnNavigate(id)} className='btn btn-primary product-button'>Update</button>
        </div>
    );
};

export default Product;