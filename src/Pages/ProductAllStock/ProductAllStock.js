import React from 'react';
import useProducts from '../Hooks/useProducts.js/useProducts';
import ProductFor1Show from './ProductFor1Show/ProductFor1Show';


const ProductAllStock = () => {
    const [products] = useProducts();
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

        </div>
    );
};

export default ProductAllStock;