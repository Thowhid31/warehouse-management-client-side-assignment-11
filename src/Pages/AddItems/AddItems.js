import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('New Item Added in Database & UI');
               })
    };
    return (
        <div className='w-50 mx-auto m-5'>
            <h2>Fill all section to Add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price($)' type="number" {...register("price", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Quantity of Product' type='number' {...register("quantity")} />
                <input className='mb-2' placeholder="Product's Photo URL" type='text' {...register("img")} />
                <input className='mb-2' placeholder="User Emails" value={user.email} disabled type='email' {...register("email")} />
                <input className='btn btn-primary' type="submit" value='Add Item' />
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddItems;