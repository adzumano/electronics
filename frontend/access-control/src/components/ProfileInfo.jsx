import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import ProfileImage from './ProfileImage';
let ProfileInfo = (props) => {
    return <>
        <Row style={{paddingTop : '50px'}}>
            <Col sm={3}>
                <ProfileImage />
            </Col>
            <Col sm={9} style={{display : 'flex'}}>
                <Col>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Username"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Surname"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Department"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Position"></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Verify Mode"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Card nomber"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group>          
                        <Form.Control size="lg" type="text" placeholder="Advisor"></Form.Control>
                    </Form.Group>          
                </Col>             
            </Col>
        </Row>
    </>
};

export default ProfileInfo;