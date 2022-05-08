import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts.js/useProducts';
import ProductFor1Show from './ProductFor1Show/ProductFor1Show';
import './ProductAllStock.css';

const ProductAllStock = () => {
    const [products, setProducts] = useProducts([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setPageSize] = useState(10);

    useEffect(()=>{
        fetch(`https://secure-hollows-46907.herokuapp.com/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [page, size])

    useEffect(()=>{
        fetch('https://secure-hollows-46907.herokuapp.com/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [])
    return (

        <div id='products' className='container'>
            <h1 className='products-header mt-4'>Our All Products</h1>
            <div className='products-container'>
                {
                    products.map(product => <ProductFor1Show
                        key={product._id}
                        product={product}
                    ></ProductFor1Show>)
                }

            </div>
            <div className='pagination-class m-4'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                        className={page === number ? 'selected' : ''}
                        onClick={()=>setPage(number)}
                        >{number + 1}</button>)
                }
                <select onChange={e => setPageSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>

    );
};

export default ProductAllStock;