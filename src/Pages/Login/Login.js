import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      if(user){
        navigate(from, { replace: true });
      }

    const handleLoginBtn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    return (
        <div className='container w-50 mx-auto form-class-login'>
            <h1 className='login-head  p-4'>Please Login</h1>
            <Form onSubmit={handleLoginBtn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='signup-btn' variant="primary" type="submit">
    Login
  </Button>
</Form>
<p className='mt-3'>New to Admin Panel? <span className='signup-toggle' onClick={navigateSignUp}>Please Sign Up</span></p>

<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;