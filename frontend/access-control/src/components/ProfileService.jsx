import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';

let ProfileService = (props) => {
    return <>
        <Row className="mt-5">
            <Col>
                <div className="bg-primary h-100">
                    <h2 className="text-center font-weight-normal text-white">Device Access Setting</h2>
                </div>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col></Col>
            <Col sm={5}>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="ID"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Gender"></Form.Control>
                </Form.Group>
            </Col>
            <Col sm={5}>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Device priviege"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Pin"></Form.Control>
                </Form.Group>
            </Col>
            <Col></Col>
        </Row>
    </>
};
export default ProfileService;