import React, {useState} from 'react';
import {Table, Button, Container, Row, Image, Form, Col} from 'react-bootstrap';
import DataPagination from './DataPagination';
import DataCRUD from './DataCRUD';
import {NavLink} from 'react-router-dom';

let DataTableDevice = (props) => {
    const styles = {
        divStyle : {
            paddingTop: '50px',
        },
        navLink : {
            color : '#fff',
            textDecoration : "none"
        }
    };
    const searchStyles = {
        divStyle : {
            paddingTop: '100px',
        },
        inputStyle : {
            width : '45%',
            margin : '0 50px 0 0',
        },
        buttonStyle : {
            width : '15%',
        }
    };

    return <>
        <Form.Row style={searchStyles.divStyle}>
            <Form.Group as={Col}>
                <Form inline className="justify-content-center">
                    <Form.Control type="text" placeholder="Search" size="lg" style={searchStyles.inputStyle} />
                    <Button variant="outline-success" size="lg" style={searchStyles.buttonStyle}>Search</Button>
                </Form>
            </Form.Group>
        </Form.Row>
        <Row style={styles.divStyle}>
        
            <Table striped bordered hover m-2>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Serial Number</th>
                        <th>Device IP</th>
                        <th>Device Model</th>
                        <th>Last Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            props.accountData.map(account => <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.serial_number}</td>               
                            <td>{account.device_ip}</td>
                            <td>{account.device_model}</td>
                            <td>{account.check_out}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            <DataPagination />
        </Row>
    </>
}

export default DataTableDevice;