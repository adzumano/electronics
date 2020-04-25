import React from 'react';
import {Pagination} from 'react-bootstrap';


const DataPagination = (props) => {
    const first = 1;
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(props.totalAccounts / props.accountsPerPage); i++){
        pageNumbers.push(i);
    }
    const last = Math.ceil(props.totalAccounts / props.accountsPerPage);
    return (
        <Pagination size="xs" className="justify-content-center">
            <Pagination.First onClick={() => props.paginate(first)} className={props.currentPage === first ? `disabled` : ''}/>
            <Pagination.Prev onClick={() => props.paginate(props.currentPage - 1)} className={props.currentPage === first ? `disabled` : ''}/>
            {
                pageNumbers.map(number => 
                    <Pagination.Item key={number} onClick={() => props.paginate(number)} className={props.currentPage === number ? 'active' : ''}>
                    {number}
                    </Pagination.Item>   
                )   
            }
            <Pagination.Next onClick={() => props.paginate(props.currentPage + 1)} className={props.currentPage === last ? `disabled` : ''}/>
            <Pagination.Last onClick={() => props.paginate(last)} className={props.currentPage === last ? `disabled` : ''}/>
        </Pagination>
    )
};

export default DataPagination;