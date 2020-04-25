import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import {setAccounts,setToogleAccountFetching} from '../../state/reducer/accountReducer';
import Preloader from '../../components/Preloader';
import Personal from './Personal';


class PersonalContainer extends React.Component {
    componentDidMount() {
        this.getAccounts();
    }
    getAccounts() {
        this.props.setToogleAccountFetching(true);
        axios
        .get(`http://127.0.0.1:8000/api/v1/accounts/personal/`)
        .then(response => {
            this.props.setToogleAccountFetching(false);
            this.props.setAccounts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render () {
        return <>
            {this.props.isFetching ? <Preloader/> : <Personal
            accountData={this.props.accountData}
            pageSize = {this.props.pageSize}
            totalAccountCount = {this.props.totalAccountCount}
            currentPage = {this.props.currentPage}
            />}
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        accountData : state.accountPage.accountData,
        pageSize : state.accountPage.pageSize,
        totalAccountCount : state.accountPage.totalAccountCount,
        currentPage : state.accountPage.currentPage,
        isFetching : state.accountPage.isFetching
    }
};


export default connect(mapStateToProps,{setAccounts,setToogleAccountFetching})(PersonalContainer);