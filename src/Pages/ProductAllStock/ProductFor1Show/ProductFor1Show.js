import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts.js/useProducts';
import './ProductFor1Show.css'

const ProductFor1Show = ({ product }) => {
    const { _id } = product;
    const [products, setProducts] = useProducts();
    const navigate = useNavigate()

    const handleAddNew = () => {
        navigate('/addItems')
    }

    const updateBtnNavigate = (id) => {
        navigate(`/product/${id}`)
    }

    const handleDeleteOne = (id) => {

        const proceed = window.confirm('Are you sure for delete?');
        //DELETE Operation starts here
        if (proceed) {
            const url = `https://secure-hollows-46907.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    const { img, name, description, price, quantity, supplierName } = product;
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
                <h3>{name} </h3>
                <p>Cost: {price}</p>
                <p><small>{description}</small></p>
                <p>In Stock: {quantity}</p>
                <p>Seller: {supplierName}</p>
            </div>
            <div className='button-class-for-crud'>
                <button onClick={() => updateBtnNavigate(_id)} className='btn btn-success add-new-class'>Update</button>

                <button onClick={() => handleAddNew()} className='btn btn-primary add-new-class'>Add New</button>

                <button onClick={() => handleDeleteOne(product._id)} className='btn btn-danger add-new-class'>Delete</button>
            </div>
        </div>
    );
};

export default ProductFor1Show;