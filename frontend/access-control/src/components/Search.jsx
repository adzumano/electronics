import React from 'react';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';

let Search = (props) => {
    const styles = {
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
        <Form.Row style={styles.divStyle}>
            <Form.Group as={Col}>
                <Form inline className="justify-content-center">
                    <Form.Control type="text" placeholder="Search" size="lg" style={styles.inputStyle}/>
                    <Button variant="outline-success" size="lg" style={styles.buttonStyle}>Search</Button>
                </Form>
            </Form.Group>
        </Form.Row>
    </>
};

export default Search;

