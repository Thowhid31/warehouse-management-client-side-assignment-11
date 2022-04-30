import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div id='products' className='container'>
            <h1 className='products-header mt-4'>Our Some Products</h1>
            <div className='products-container'>
            {
                products.slice(0, 6).map(product => <Product key={product.id}
                product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;