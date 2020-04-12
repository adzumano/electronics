import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Modal} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import UserImage from './UserImage';
import Login from '../pages/Auth/Login';


let Header = (props) => {
    return <>
        <Navbar bg="white" variant="white">
            <Navbar.Brand><HeaderLogo /></Navbar.Brand>
                <Nav className="ml-auto">
                    <HeaderLinks />
                </Nav>
                <Nav className="ml-auto">
                    <Login />
                    <UserImage />
                </Nav>
        </Navbar> 
    </>
};

export default Header;

