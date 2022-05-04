import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductArticl.css';
import { useForm } from "react-hook-form";

const ProductArticle = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleDeliverButton = () => {
        const quantityDecrease = product.quantity;
        product.quantity = parseInt(quantityDecrease) - 1;
        console.log(product.quantity);

    }

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
                <button onClick={() => handleDeliverButton()} className='btn btn-success mb-3 mt-3'>Deliver</button>
            </div>
            <div className='m-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='button-class-for-stock w-25 btn btn-light' type="number" placeholder='Enter Positive Number Only'/><br/>
                    <input className='btn btn-primary mt-2' type="submit" value={'Add to Stock'} />
                </form>
            </div>
        </div>
    );
};

export default ProductArticle;