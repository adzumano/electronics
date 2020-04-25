import React from 'react';
import { connect } from "react-redux";
import Account from "./Account";
import * as axios from 'axios';
import {setAccounts,setToogleAccountFetching,newAccountTextAC} from '../../state/reducer/accountReducer';
import Preloader from '../../components/Preloader';
import { withRouter, Redirect } from 'react-router';


class AccountContainer extends React.Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }

    }
    componentDidMount() {
        this.getAccounts();
    }
    getAccounts() {
        this.props.setToogleAccountFetching(true);
        axios
        .get(`http://127.0.0.1:8000/api/v1/accounts/list/`)
        .then(response => {
            this.props.setToogleAccountFetching(false);
            this.props.setAccounts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    deleteAccount(accountId){
        const {accountData} = this.accountData;
        axios
        .delete(`http://127.0.0.1:8000/api/v1/accounts/account/detail/${accountId}`)
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    response : result,
                    accountData : accountData.filter(account => account.id !== accountId)
                });
            }
        )
        .catch(error => console.log(error));
    };
   
    editAccounts(){

    };
    render () {
        if (this.state.loggedIn === false){
            return <Redirect to="/login" />
        }
        return <>
            {this.props.isFetching ? <Preloader/> : <Account
            accountData={this.props.accountData}
            deleteAccount={this.deleteAccount}
            addAccount = {this.addAccount}
            addAccountData={this.props.addAccountData}
            newAccountText={this.props.newAccountTextAC}
            isFetching = {this.props.isFetching}
            setToogleAccountFetching = {this.props.setToogleAccountFetching}
            />}
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        accountData : state.accountPage.accountData,
        addAccountData : state.accountPage.addAccountData,
        isFetching : state.accountPage.isFetching,
        search : state.accountPage.search,
        error : state.accountPage.error,
        response : state.accountPage.response
    }
};

let WithUrlDataComponentContainer = withRouter(AccountContainer);


export default connect(mapStateToProps,{setAccounts,setToogleAccountFetching,newAccountTextAC})(WithUrlDataComponentContainer);