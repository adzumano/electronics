import React from 'react';
import {Form,Button, Modal, ButtonGroup} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';

let LoginModal = (props) => {  
    return <>
        <Modal
        {...props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <HeaderLogo />
            </Modal.Header>
            <Modal.Body>
                <h2 className="text-center text-primary">Log in</h2>
                <Form className="mt-4">
                    <Form.Group>
                        <Form.Control type="email" size="lg" placeholder="Username"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" size="lg" placeholder="Password"></Form.Control>
                    </Form.Group>
                    <ButtonGroup style={{display : 'flex',flexDirection : 'column'}}>
                        <Button type="sibmit" size="lg" className="mt-4">Log in</Button>
                        <p className="ml-auto">
                            Forgot <a href="#">password?</a>
                        </p>
                    </ButtonGroup>
            
                </Form>
            </Modal.Body>
        </Modal>
    </>
};

export default LoginModal;
