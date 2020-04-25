import React, {useState} from 'react';
import {Table, Button, Container, Row, Image, Form, Col} from 'react-bootstrap';
import DataPagination from './DataPagination';
import DataCRUD from './DataCRUD';
import {NavLink} from 'react-router-dom';

let DataTablePersonal = (props) => {
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
    const [search, setSearch] = useState('')



    // let filteredPersonal = props.accountData.filter(
    //     account => {
    //         return account.student_id.toLowerCase().includes(search.toLowerCase())
    //     }  
    // );
    return <>
        <Form.Row style={searchStyles.divStyle}>
            <Form.Group as={Col}>
                <Form inline className="justify-content-center">
                    <Form.Control type="text" placeholder="Search" size="lg" style={searchStyles.inputStyle} onChange={e => setSearch(e.target.value)}/>
                    <Button variant="outline-success" size="lg" style={searchStyles.buttonStyle}>Search</Button>
                </Form>
            </Form.Group>
        </Form.Row>
        <Row style={styles.divStyle}>
         
            <Table striped bordered hover m-2>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>№</th>
                        <th>Student_id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Check in(time)</th>
                        <th>Check out(time)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            props.accountData.map(account => <tr key={account.id}>
                            <td><Button variant="primary"><NavLink to="/profile" style={styles.navLink}>View</NavLink></Button>{' '}</td>
                            <td>{account.id}</td>
                            <td>{account.student_id}</td>               
                            <td>{account.name}</td>
                            <td>{account.surname}</td>
                            <td>{account.department}</td>
                            <td>{account.position}</td>
                            <td>{account.check_in}</td>
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

export default DataTablePersonal;