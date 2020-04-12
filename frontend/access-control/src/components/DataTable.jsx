import React from 'react';
import {Table, Button, Container, Row, Image} from 'react-bootstrap';
import DataPagination from './DataPagination';
import DataCRUD from './DataCRUD';
import {NavLink} from 'react-router-dom';
import sss from '../assets/img/user-name.png'
let DataTable = (props) => {
    const styles = {
        divStyle : {
            paddingTop: '50px',
        },
        navLink : {
            color : '#fff',
            textDecoration : "none"
        }
    };
    return (
            <Row style={styles.divStyle}>
                <DataCRUD />
                <Table striped bordered hover m-2>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>№</th>
                            <th>Photo</th>
                            <th>Student_id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Check in(time)</th>
                            <th>Check out(time)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.accountData.map(account => <tr key={account.id}>
                                <td><Button variant="primary"><NavLink to="/profile" style={styles.navLink}>View</NavLink></Button>{' '}</td>
                                <td>{account.id}</td>
                                <td><Image src={account.photo} style={{width : '3rem'}}/></td>
                                <td>{account.student_id}</td>               
                                <td>{account.name}</td>
                                <td>{account.surname}</td>
                                <td>{account.check_in}</td>
                                <td>{account.check_out}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
                <DataPagination />
            </Row>
    )
};

export default DataTable;