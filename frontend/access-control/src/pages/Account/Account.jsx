import React, { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import DataPagination from '../../components/DataPagination';

let Account = (props) => {
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [accountsPerPage] = useState(5);
    const totalAccounts = accounts.length;
    useEffect(() => {
        const fetchAccounts = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/v1/accounts/list');
            setAccounts(res.data);
        }
        fetchAccounts();
    }, []);
    
    const indexOfLastAccount = currentPage * accountsPerPage;
    const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
    const currentAccount = accounts.slice(indexOfFirstAccount, indexOfLastAccount); 

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return <>
        
        <Container>
            <DataTable 
            accountData={props.accountData} 
            deleteAccount={props.deleteAccount} 
            addAccount={props.addAccount} 
            addAccountData={props.addAccountData} 
            newAccountText={props.newAccountText}
            isFetching = {props.isFetching}
            setToogleAccountFetching={props.setToogleAccountFetching}
            accounts = {currentAccount}
            error={props.error}
            response={props.response}
            />
            <DataPagination accountsPerPage={accountsPerPage} totalAccounts={totalAccounts} paginate={paginate} currentPage={currentPage}/>
        </Container>
    </>
};

export default Account;

