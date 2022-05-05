import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductArticl.css';
// import { useForm } from "react-hook-form";

const ProductArticle = () => {

    // const { register } = useForm();
    // const onSubmit = data => console.log(data);


    const { id } = useParams();
    const [product, setProduct] = useState(0);
    let quantity = parseInt(product?.stock)
    console.log(quantity);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleDeliverButton = event => {
        
        const quantityDecrease = product.quantity;
        product.quantity = parseInt(quantityDecrease) - 1;
        console.log(product.quantity);
    }

    const handleAddStock = (event) => {
        event.preventDefault();
        const stock = event.target.stock.value;
        console.log(stock);
        const newQuantity = parseInt(stock + quantity)
        console.log(newQuantity)

        if(Number < 0){
            alert('please enter positive amount')}
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
                <div>
                    <input className='button-class-for-stock w-25 btn btn-light' name='stock' type="number" placeholder='Enter Positive Number Only'/><br/>
                    <input onClick={handleAddStock} className='btn btn-primary mt-2' type="submit" value='Add to Stock'/>
                </div>
            </div>
        </div>
    );
};

export default ProductArticle;