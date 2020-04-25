import React, {useState} from 'react';
import {Button,Image,Form, Modal, ButtonGroup, Container, Row} from 'react-bootstrap';
import LoginModal from '../../components/LoginModal';
import userImage from '../../assets/img/user-name.png';
import {NavLink, Redirect} from 'react-router-dom';
import HeaderLogo from '../../components/HeaderLogo';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null){
            loggedIn = false
        }
        this.state = {
            username : '',
            password: '',
            loggedIn
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        if (username === 'zhaslan' && password === 'zhaslan123'){
            localStorage.setItem("token","adadsadsadsadsads");
            this.setState({
                loggedIn : true
            });
        }
    }
    render() {
        if (this.state.loggedIn){
            return <Redirect to="/" />
        }
        else {
            return <>
                <Container className="login">
                    <Row className="justify-content-center">
                        <Form style={{ width : '40%',padding : '10px', borderRadius : '10px', textAlign : 'center', marginTop : '10rem'}} onSubmit={this.onSubmit}>
                            <HeaderLogo/>
                            <Form.Group className="mt-5">
                                <Form.Control type="text" placeholder="username" name="username" id="username" value={this.state.username} onChange={this.onChange} size="lg"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="password" name="password" id="password" value={this.state.password} onChange={this.onChange} size="lg"></Form.Control>
                            </Form.Group>
                            <Button variant="info" type="submit" className="w-100 mt-5" size="lg">
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </>
        }
    }
};
