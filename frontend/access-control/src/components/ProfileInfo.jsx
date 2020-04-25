import React, { useState, useEffect } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import ProfileImage from './ProfileImage';
import Preloader from './Preloader';
import PubSub from 'pubsub-js';

let ProfileInfo = (props) => {

    let [state, setState] = useState()
    if (!props.profile) {
        return <Preloader />    
    }
    let setValues = (e, field) => {
        const editAccountData = props.editAccountData;
        editAccountData[field] = e.target.value;
        setState({editAccountData})
    };
    let editProfile = (editAccountData) => {
        const requestInfo = {
            method : 'PUT',
            body : JSON.stringify(props.editAccountData),
            headers : new Headers({
                'Content-type' : 'application/json'
            })
        };
        fetch(`http://127.0.0.1:8000/api/v1/accounts/account/detail/${props.editAccountData.id}`,requestInfo)
        .then(response => response.json())
        .then(updateAccount => {
            let { profile } = this.state;
            let position = profile.findIndex(profile => profile.id === props.editAccountData.id);
            profile[position] = updateAccount;
            this.setState({ profile });

        })
        .then(err => console.log(err));
    };
    return <>
        <Row style={{paddingTop : '50px'}}>
            <Col sm={3}>
                <ProfileImage photo={props.profile.photo}/>
            </Col>
            <Col sm={9} style={{display : 'flex'}}>
                <Col>
                    <Form.Group>
                        <Form.Control type="text" size="lg" placeholder="Name" value={props.profile.name} onChange={e => setValues(e,'name')}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" size="lg" placeholder="Surname" value={props.profile.surname} onChange={e => setValues(e,'surname')}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" size="lg"  onChange={e => setValues(e,'department')} value={props.profile.department}>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                            <option value="kz">KZ</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" size="lg"  onChange={e => setValues(e,'position')} value={props.profile.position}>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control type="text" size="lg" placeholder="StudentID" value={props.profile.student_id} onChange={e => setValues(e,'student_id')}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" size="lg" onChange={e => setValues(e,'gender')} value={props.profile.gender}>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" size="lg" placeholder="Email" value={props.profile.email} onChange={e => setValues(e,'email')}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" size="lg" placeholder="Advisor" value={props.profile.advisor} onChange={e => setValues(e,'advisor')}></Form.Control>
                    </Form.Group>         
                </Col>             
            </Col>
        </Row>
        <Button onClick={editProfile}>Edit</Button>
    </>
};

export default ProfileInfo;