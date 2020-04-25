import React, { useState } from 'react';
import {ButtonGroup, Button, Form,Modal,Col} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';
import file from '../assets/excel/acc.xlsx';

let DataCRUD = (props) => {
    let styles = {
        buttonStyle : {
            marginRight : '30px',
        }
    }
    const [modalShow, setModalShow] = useState(false);
    const [state, setState] = useState()

    let setValues = (e, field) => {
        const addAccountData = props.addAccountData;
        addAccountData[field] = e.target.value;
        setState({addAccountData})
        console.log(props.addAccountData)
    };
    let addAccount = () => {
        let data = {
            id : parseInt(props.addAccountData.id),
            name : props.addAccountData.name,
            surname : props.addAccountData.surname,
            department : props.addAccountData.department,
            position : props.addAccountData.position,
            student_id : props.addAccountData.student_id,
            gender : props.addAccountData.gender,
            email : props.addAccountData.email,
            advisor : props.addAccountData.advisor
        }
        const requestInfo = {
            method : 'POST',
            body : JSON.stringify(data),
            headers : new Headers({
                'Content-type' : 'application/json'
            })
        };
        fetch(`http://127.0.0.1:8000/api/v1/accounts/account/create/`,requestInfo)
        .then(response => response.json())
        .then(newAccount => {
            
        })
        .then(err => console.log(err))
    }   
    return <>
          <ButtonGroup size="sm" className="mb-2">
            <Button variant="secondary" style={styles.buttonStyle} onClick={() => setModalShow(true)} >ADD</Button>
            <a href={file} download><Button variant="success">EXCEL EXPORT</Button></a>
        </ButtonGroup>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow} 
        onHide={() => setModalShow(false)}
        >
            <Modal.Header closeButton>
                <HeaderLogo />
            </Modal.Header>
            <Modal.Body>
                <h2 className="text-center text-primary">Add Account</h2>
                <Form className="mt-4 d-flex flex-wrap">
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Control type="text" size="lg" placeholder="Name" value={props.addAccountData.name} onChange={e => setValues(e,'name')}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" size="lg" placeholder="Surname" value={props.addAccountData.surname} onChange={e => setValues(e,'surname')}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" size="lg"  onChange={e => setValues(e,'department')}>
                                <option>----------</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                                <option value="kz">KZ</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" size="lg"  onChange={e => setValues(e,'position')}>
                                <option>----------</option>
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Control type="text" size="lg" placeholder="StudentID" value={props.addAccountData.student_id} onChange={e => setValues(e,'student_id')}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" size="lg" onChange={e => setValues(e,'gender')}>
                                <option>----------</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" size="lg" placeholder="Email" value={props.addAccountData.email} onChange={e => setValues(e,'email')}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" size="lg" placeholder="Advisor" value={props.addAccountData.advisor} onChange={e => setValues(e,'advisor')}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <ButtonGroup>
                            <Button size="lg" className="mt-4" onClick={addAccount}>Add</Button>
                        </ButtonGroup>
                    </Col>
                </Form>
            </Modal.Body>
        </Modal>
    </>
};

export default DataCRUD;