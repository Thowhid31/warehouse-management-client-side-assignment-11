import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductArticl.css'

const ProductArticle = () => {
    
    

    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <h3>Detail Inventory Article</h3>
            <div className='container w-50 single-product-details '>
            <h4 className='m-3'>Name: {product.name}</h4>
            <img src={product.img} alt="" />
            <p className='mt-3'><strong>About Product:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p> <strong>Quantity:</strong> {product.quantity}</p>
            <h5>Supplier: {product.supplierName}</h5>
            <button className='btn btn-success mb-3 mt-3'>Deliver</button>
            </div>
            
        </div>
    );
};

export default ProductArticle;