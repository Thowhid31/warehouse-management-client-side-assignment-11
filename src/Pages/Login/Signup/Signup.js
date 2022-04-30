import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css'





const Signup = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');



    const handleSignupBtn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;

        console.log(email, password, name);
    }

    const navigateSignUp = event => {
        navigate('/login')
    }
    return (
        <div>
            <div className='container w-50 mx-auto form-class-login'>
            <h1 className='login-head m-4'>Please Signup</h1>
            <Form onSubmit={handleSignupBtn}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required/>

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='signup-btn' variant="primary" type="submit">
    Signup
  </Button>
</Form>
<p className='mt-3'>Already in Admin Panel? <span className='signup-toggle' onClick={navigateSignUp}>Please Sign In</span></p>
        </div>
        </div>
    );
};

export default Signup;