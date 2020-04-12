import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import ProfileImage from '../../components/ProfileImage';
let Profile = (props) => {
    return <>
        <Container>
            <h2 className="text-center text-primary" style={{paddingTop : '50px'}}>Profile</h2>
            <Form>
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

            </Form>
        </Container>
    </>
};

export default Profile;