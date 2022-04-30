import React from 'react';
import { Navigate } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const {id, img, name, description, price } = product;


    const navigateToMyProductDetail = (id) => {
        Navigate(`/products/${id}`)
    }
    return (
        <div className='single-product'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToMyProductDetail(id)} className='btn btn-primary product-button'>See Stock</button>
        </div>
    );
};

export default Product;