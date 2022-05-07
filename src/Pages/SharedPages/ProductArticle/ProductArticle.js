// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductArticl.css';
// // import { useForm } from "react-hook-form";

// const ProductArticle = () => {

//     // const { register } = useForm();
//     // const onSubmit = data => console.log(data);
//     const { id } = useParams();
//     const [product, setProduct] = useState(0);
//     let quantity = parseInt(product?.stock)
//     console.log(quantity);

//     useEffect(() => {
//         const url = `http://localhost:5000/product/${id}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setProduct(data));
//     }, [])

//     const handleDeliverButton = event => {

//         const quantityDecrease = product.quantity;
//         product.quantity = parseInt(quantityDecrease) - 1;
//         console.log(product.quantity);
//     }

//     const handleAddStock = (event) => {
//         event.preventDefault();
//         const stock = event.target.stock.value;
//         console.log(stock);
//         const newQuantity = parseInt(stock + quantity)
//         console.log(newQuantity)

//         if(Number < 0){
//             alert('please enter positive amount')}
//     }

//     return (
//         <div>
//             <h3>Detail Inventory Article</h3>
//             <div className='container w-50 single-product-details '>
//                 <h4 className='m-3'>Name: {product.name}</h4>
//                 <img src={product.img} alt="" />
//                 <p className='mt-3'><strong>About Product:</strong> {product.description}</p>
//                 <p><strong>Price:</strong> {product.price}</p>
//                 <p> <strong>Quantity:</strong> {product.quantity}</p>
//                 <h5>Supplier: {product.supplierName}</h5>
//                 <button onClick={() => handleDeliverButton()} className='btn btn-success mb-3 mt-3'>Deliver</button>
//             </div>
//             <div className='m-5'>
//                 <div>
//                     <input className='button-class-for-stock w-25 btn btn-light' name='stock' type="number" min='1' placeholder='Enter Positive Number Only'/><br/>
//                     <input onClick={handleAddStock} className='btn btn-primary mt-2' type="submit" value='Add to Stock'/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductArticle;





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './ProductArticl.css';

const ProductArticle = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, price, img, description, supplierName, quantity } = product;

    useEffect(() => {
        const getProductById = async () => {
            const url = `http://localhost:5000/product/${productId}`
            const { data } = await axios.get(url);
            setProduct(data)
        }
        getProductById();




    }, [product, productId])

    const handleDeliverButton = (id) => {
        const getQuantity = async () => {
            const newUpdate = { quantity }
            const url = `http://localhost:5000/delivered/${productId}`;
            const { data } = await axios.put(url, newUpdate)
            if (data.modifiedCount) {
                toast.success('Successfully Delivered', { id: 'test' })
            }
            if(quantity === 0){
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
            const url = `http://localhost:5000/addtostock/${productId}`;
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
                <button onClick={() => handleDeliverButton()} className='btn btn-success mb-3 mt-3'>Deliver</button>
            </div>
            <div className=' container m-5 col-sm-12 col-lg-6 mx-auto d-flex'>
                <div>
                    {/* <input className='button-class-for-stock w-25 btn btn-light' name='add' type="number" min='1' placeholder='Enter Positive Number Only' /><br />
                    <button onClick={handleStockAdd} className='btn btn-primary mt-2' type="submit" value='Add to Stock'>Add to Stock</button> */}
                    <form onSubmit={handleStockAdd} className=' form-floating d-flex flex-lg-row stock mx-auto'>
                        <input type="number" name='add' min='1' className='form-control me-3 w-100' id='floatingInput' placeholder='Add to Stock' />
                        <label htmlFor='floatingInput' className='class-of-add-stock tex-dark'>Input Hrer</label>
                        <input className='btn btn-outline-success text-dark mx-3 mt-0 mb-4 py-3' type='submit' value='Add to Stock' />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ProductArticle;












