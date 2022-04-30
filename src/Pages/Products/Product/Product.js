import React from 'react';

const Product = ({product}) => {
    const {id, img, name, description, price } = product;
    return (
        <div>
            <h1>Product: {name}</h1>
        </div>
    );
};

export default Product;