import React from 'react';
import logo from '../../../images/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header className='header'>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/blog">Blog
                            </NavLink>
                            {
                                user
                                    ?
                                    <Button onClick={handleSignOut} className="btn btn-theme">Sign Out</Button>
                                    :
                                    <NavLink
                                        className="btn btn-theme" to="/login">Login
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;