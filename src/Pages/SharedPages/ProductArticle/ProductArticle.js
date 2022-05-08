import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './ProductArticl.css';

const ProductArticle = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const {quantity } = product;

    useEffect(() => {
        const getProductById = async () => {
            const url = `https://secure-hollows-46907.herokuapp.com/product/${productId}`
            const { data } = await axios.get(url);
            setProduct(data)
        }
        getProductById();
    }, [product, productId])

    const handleDeliverButton = (id) => {
        const getQuantity = async () => {
            const newUpdate = { quantity }
            const url = `https://secure-hollows-46907.herokuapp.com/delivered/${productId}`;
            const { data } = await axios.put(url, newUpdate)
            if (data.modifiedCount) {
                toast.success('Successfully Delivered', { id: 'test' })
            }
            if(quantity === 1){
                toast.error('Out of Stock')
                
                }
        }
        getQuantity()
    }

    const handleStockAdd = async (event) => {
        event.preventDefault();
        const getQuantity = event.target.add.value;
        if (getQuantity >= 1) {
            const newQuantity = parseInt(getQuantity) + parseInt(quantity);
            const url = `https://secure-hollows-46907.herokuapp.com/addtostock/${productId}`;
            const {data}= await axios.put(url, {newQuantity});
            if(data.modifiedCount === 1 || data.matchedCount === 1){
                toast.success('Successfully added in Stock')
                console.log(data);
            }

        }
        event.target.reset();
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
                <button onClick={() => handleDeliverButton()} className='btn btn-success mb-3 mt-3'
                disabled={quantity === 0}
                >Deliver</button>
            </div>
            <div className=' container m-5 col-sm-12 col-lg-6 mx-auto'>
                <div>
                    {/* <input className='button-class-for-stock w-25 btn btn-light' name='add' type="number" min='1' placeholder='Enter Positive Number Only' /><br />
                    <button onClick={handleStockAdd} className='btn btn-primary mt-2' type="submit" value='Add to Stock'>Add to Stock</button> */}
                    <form onSubmit={handleStockAdd} className=' form-floating d-flex flex-lg-row stock mx-auto'>
                        <input type="number" name='add' min='1' className='form-control me-3 w-100' id='floatingInput' placeholder='Add to Stock' />
                        <label htmlFor='floatingInput' className='class-of-add-stock tex-dark'>Input Here</label>
                        <input className='btn btn-outline-success text-dark mx-3 mt-0 mb-4 py-3' type='submit' value='Add to Stock'/>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ProductArticle;












