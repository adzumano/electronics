import React, { useState } from 'react';
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
    
    const [search, setSearch] = useState('')

    const filterAcc = props.accountData.filter(
        account => {
            return account.name.toLowerCase().includes(search.toLowerCase())
        }  
    );

    return <>
        <Form.Row style={styles.divStyle}>
            <Form.Group as={Col}>
                <Form inline className="justify-content-center">
                    {search}
                    <Form.Control type="text" placeholder="Search" size="lg" style={styles.inputStyle} onChange={e => setSearch(e.target.value)}/>
                    <Button variant="outline-success" size="lg" style={styles.buttonStyle}>Search</Button>
                </Form>
            </Form.Group>
        </Form.Row>
    </>
};

export default Search;

