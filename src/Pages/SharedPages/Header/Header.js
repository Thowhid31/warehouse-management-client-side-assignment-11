import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
  <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Expert Hand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="home#products">Products</Nav.Link>
      <Nav.Link href="home#experts">Experts</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      {
          user ? <button className='sign-our-button-for-toggle' onClick={handleSignOut}>Sign Out</button> :
          <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;