import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

let DataCRUD = (props) => {
    let styles = {
        buttonStyle : {
            marginRight : '30px',
        }
    }
    return <>
        <ButtonGroup size="lg" className="mb-2">
            <Button variant="secondary" style={styles.buttonStyle}>ADD</Button>
            <Button variant="danger" style={styles.buttonStyle}>DELETE</Button>
            <Button variant="warning" style={styles.buttonStyle}>EDIT</Button>
            <Button variant="success">EXCEL EXPORT</Button>
        </ButtonGroup>
    </>
};

export default DataCRUD;