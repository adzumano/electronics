import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import UserImage from './UserImage';

let Header = (props) => {
    return <>
        <Navbar bg="white" variant="white">
            <Navbar.Brand><HeaderLogo /></Navbar.Brand>
                <Nav className="ml-auto">
                    <HeaderLinks />
                </Nav>
                <Nav className="ml-auto">
                    <UserImage />
                </Nav>
        </Navbar> 
    </>
};

export default Header;

