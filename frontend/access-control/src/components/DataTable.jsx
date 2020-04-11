import React from 'react';
import {Table, Button, Container, Row} from 'react-bootstrap';
import DataPagination from './DataPagination';
import DataCRUD from './DataCRUD';
let DataTable = (props) => {
    const divStyle = {
        paddingTop: '50px',
    };
    return (
            <Row style={divStyle}>
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
                                <td><Button variant="primary">View</Button>{' '}</td>
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