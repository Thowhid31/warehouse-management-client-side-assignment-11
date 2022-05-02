import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';






const Signup = () => {


    const [accept, setAccept] = useState(false);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    let errorShow;
    const location = useLocation
    let from = location.state?.from?.pathname || "/";



    const handleSignupBtn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;

        
        if(accept){
            createUserWithEmailAndPassword(email, password)
        }

        // console.log(email, password, name);

        
    }

    const navigateSignUp = event => {
        navigate('/login')
    }

    if(loading){
      return <Loading></Loading>
  }

    if(user){
      navigate(from, { replace: true });
    }
    if(error){
        errorShow = <div>
        <p>Error: {error?.message}</p>
        </div>
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
    <Form.Check onClick={() => setAccept(!accept)} type="checkbox" className={accept ? 'text-success' : 'text-danger'} name='terms' id='terms' label="Accept All Terms and Conditions" />
  </Form.Group>
  <Button
  disabled={!accept}
  className='signup-btn'  type="submit">
    Signup
  </Button>
</Form>
{errorShow}
<p className='mt-3'>Already in Admin Panel? <span className='signup-toggle' onClick={navigateSignUp}>Please Sign In</span></p>
<SocialLogin></SocialLogin>
        </div>
        
        </div>
    );
};

export default Signup;