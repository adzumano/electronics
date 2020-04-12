import React from 'react';
import {Table, Button, Container, Row} from 'react-bootstrap';
import DataPagination from './DataPagination';
import DataCRUD from './DataCRUD';
import {NavLink} from 'react-router-dom';
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
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Status</th>
                            <th>Student_id</th>
                            <th>Date_created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.accountData.map(account => <tr key={account.id}>
                                <td><Button variant="primary"><NavLink to="/profile" style={styles.navLink}>View</NavLink></Button>{' '}</td>
                                <td>{account.id}</td>
                                <td>{account.name}</td>
                                <td>{account.surname}</td>
                                <td>{account.status}</td>
                                <td>{account.student_id}</td>
                                <td>{account.date_created}</td>
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