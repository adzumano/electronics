import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import ProfileInfo from '../../components/ProfileInfo';
import ProfileService from '../../components/ProfileService';
let Profile = (props) => {
    return <>
        <Container>
            <h2 className="text-center text-primary" style={{paddingTop : '50px'}}>Profile</h2>
            <Form>
                <ProfileInfo />
                <ProfileService />
            </Form>
        </Container>
    </>
};

export default Profile;