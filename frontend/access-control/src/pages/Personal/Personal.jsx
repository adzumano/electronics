import React from 'react';
import { Container } from 'react-bootstrap';
import DataTablePersonal from '../../components/DataTablePersonal';

let Personal = (props) => {
    return (
        <>
            <Container>
                <DataTablePersonal accountData={props.accountData}/>
            </Container>
        </>
    )
};

export default Personal;

