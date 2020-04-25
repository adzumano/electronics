import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Modal} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import UserImage from './UserImage';
import Login from '../pages/Auth/Login';
import { Route, NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    componentDidUpdate(){

    }
    render() {
        return <>
            <Navbar bg="white" variant="white">
                <Navbar.Brand><HeaderLogo /></Navbar.Brand>
                    <Nav className="ml-auto">
                        <HeaderLinks />
                    </Nav>
                    <Nav className="ml-auto">
                       {
                           this.state.loggedIn ? <Button variant="info" size="lg" className="mr-3"><NavLink to="/logout">Logout</NavLink></Button> : null
                       }
                    </Nav>
                    <UserImage />
            </Navbar> 
        </>
    }   
};


