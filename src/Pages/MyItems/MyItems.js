import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {

        const getProduct = async () => {
            const email = user?.email;
            const url = `https://secure-hollows-46907.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setProducts(data);
            console.log(data);
        }
        getProduct();


    }, [user])

    const handleDeleteMyItem = (id) => {
        const proceed = window.confirm('Are you sure to Delete?')

        if (proceed) {
            const url = `https://secure-hollows-46907.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                    }
                })
            console.log('delete id', id);
        }
    }

    return (
        <div>
            <h1>My Items : {products.length}</h1>
            {
                products.map(product => <li
                    key={product._id}>
                    {product.name} — {product?.email}
                    <button className='btn btn-danger m-2' onClick={() => handleDeleteMyItem(product._id)}>Delete</button>
                </li>)

            }
        </div>
    );
};

export default MyItems;