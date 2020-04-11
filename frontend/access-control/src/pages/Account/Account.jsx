import React from 'react';
import DataTable from '../../components/DataTable';
import Search from '../../components/Search';
import { Container } from 'react-bootstrap';
import DataCRUD from '../../components/DataCRUD';


let Account = (props) => {
    return (
        <>
            <Container>
                <Search />
                <DataTable  accountData={props.accountData}/>
            </Container>
        </>
    )
};

export default Account;

