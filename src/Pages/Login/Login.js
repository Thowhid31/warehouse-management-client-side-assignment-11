import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');


    const handleLoginBtn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        console.log(email, password);
    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    return (
        <div className='container w-50 mx-auto form-class-login'>
            <h1 className='login-head'>Please Login</h1>
            <Form onSubmit={handleLoginBtn}>
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
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New to Admin Panel? <span className='signup-toggle' onClick={navigateSignUp}>Please Sign Up</span></p>
        </div>
    );
};

export default Login;