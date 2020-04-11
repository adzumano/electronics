import React from 'react';
import DataTable from '../../components/DataTable';
import Cards from '../../components/Cards';

let Account = (props) => {
    return (
        <>
            <Cards />
            <DataTable  accountData={props.accountData}/>
        </>
    )
};

export default Account;

