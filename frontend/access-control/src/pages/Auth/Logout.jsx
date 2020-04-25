import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom';
import {Button,Image,Form, Modal, ButtonGroup, Container, Row} from 'react-bootstrap';

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");
    }
    render() {
        return (
            <Container className="login">
                <Row className="flex-column text-center m-5">
                    <h1>You have been logout</h1>
                    <NavLink to="/login">Login again</NavLink>
                </Row>
            </Container>
        )
    }
}
