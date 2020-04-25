import React, {useState, useEffect} from 'react';
import {Table, Button, Container, Row, Image, Form, Col, Alert} from 'react-bootstrap';
import DataCRUD from './DataCRUD';
import {NavLink} from 'react-router-dom';
import sss from '../assets/img/user-name.png'
import Search from './Search';
import user_image from '../assets/img/user-name.png';


class DataTable extends React.Component{
    constructor(){
        super();

        this.state={
            search:null
        };
    }
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }
    styles = {
        divStyle : {
            paddingTop: '50px',
        },
        navLink : {
            color : '#fff',
            textDecoration : "none"
        }
    };
    searchStyles = {
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
    onDelete = (userId) => {   
        this.props.deleteAccount(userId);
    };
    
    render() {
        const filteredAccounts = this.props.accounts.filter((account)=>{
            if(this.state.search == null)
                return account
            else if(account.name.toLowerCase().includes(this.state.search.toLowerCase()) || account.surname.toLowerCase().includes(this.state.search.toLowerCase()) || account.student_id.toLowerCase().includes(this.state.search.toLowerCase())){
                return account
            }
        })
     
        return <>
            <Form.Row style={this.searchStyles.divStyle}>
                <Form.Group as={Col}>
                    <Form inline className="justify-content-center">
                        <Form.Control type="text" placeholder="Search" size="lg" style={this.searchStyles.inputStyle} onChange={(e)=>this.searchSpace(e)}/>
                        <Button variant="outline-success" size="lg" style={this.searchStyles.buttonStyle}>Search</Button>
                    </Form>
                </Form.Group>
            </Form.Row>
            <Row style={this.styles.divStyle}>
                <DataCRUD 

                accountData={this.props.accountData} 
                addAccountData={this.props.addAccountData}
                newAccountText={this.props.newAccountText}
                />
                <Table striped bordered hover m-2 className="display" >
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Photo</th>
                            <th>Student_id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Check in(time)</th>
                            <th>Check out(time)</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        { 
                            filteredAccounts
                            .map(account => <tbody key={account.id}>
                                <tr>
                                    <td>{account.id}</td>
                                    <td><Image src={account.photo ? account.photo : user_image} style={{width : '3rem'}}/></td>
                                    <td>{account.student_id}</td>               
                                    <td>{account.name}</td>
                                    <td>{account.surname}</td>
                                    <td>{account.check_in}</td>
                                    <td>{account.check_out}</td>
                                    <td>
                                        <Button variant="warning"><NavLink to={`/profile/${account.id}`} style={this.styles.navLink}>Edit</NavLink></Button>{' '}
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => this.onDelete(account.id)}>Delete</Button>{' '}
                                    </td>
                                </tr>
                            </tbody>
                            )
                        }
                </Table>
            </Row>
            
        </>
        
    }
   
};

export default DataTable;