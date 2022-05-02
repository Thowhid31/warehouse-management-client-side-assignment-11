import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductArticl.css'

const ProductArticle = () => {
    
    

    const {productId} = useParams();
    return (
        <div>
            <h3>Detail Inventory Article: {productId}</h3>
            
        </div>
    );
};

export default ProductArticle;