import React from 'react';

const ProductFor1Show = ({product}) => {
    const {img, name, description, price } = product;
    return (
            <div className='single-product'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            {/* <button onClick={()=> updateBtnNavigate(id)} className='btn btn-primary product-button'>Update</button> */}
        </div>
       
    );
};
    


export default ProductFor1Show;