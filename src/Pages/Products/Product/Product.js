import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const {_id, img, name, description, price, quantity, supplierName } = product;

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
            <p>Quantity : {quantity}</p>
            <h5>Supplier: {supplierName}</h5>
            <button onClick={()=> updateBtnNavigate(_id)} className='btn btn-primary product-button'>Update</button>
        </div>
    );
};

export default Product;