import React from 'react';
import { Container } from 'react-bootstrap';
import DataTableDevice from '../../components/DataTableDevice';

let Device = (props) => {
    return (
        <>
            <Container>
                <DataTableDevice accountData={props.accountData}/>
            </Container>
        </>
    )
};

export default Device;

