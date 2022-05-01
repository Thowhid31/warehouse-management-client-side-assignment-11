import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorShow;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

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

    const handleLoginBtn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
          toast('Your Password Reset Request on Email Sent!');
        }
        else{
            toast('Enter E-mail for Reset Password!')
        }
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
    
  </Form.Group>
  <Button className='signup-btn' variant="primary" type="submit">
    Login
  </Button>
</Form>
{errorShow}
<p className='mt-3'>New to Admin Panel? <Link to="/signup" className='signup-toggle text-decoration-none' onClick={navigateSignUp}>Please Sign Up</Link></p>
<p className='mt-3'>Forger Password <span className='signup-toggle' onClick={resetPassword}>Reset Password</span></p>

<SocialLogin></SocialLogin>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;