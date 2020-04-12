import React from 'react';
import { connect } from "react-redux";
import Account from "./Account";
import * as axios from 'axios';
import {setAccounts} from '../../state/reducer/accountReducer';

class AccountContainer extends React.Component {
    componentDidMount() {
        this.getAccounts();
    }
    getAccounts() {
        axios
        .get(`http://127.0.0.1:8000/api/v1/accounts/list/`)
        .then(response => {
            this.props.setAccounts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render () {
        return <>
            <Account accountData={this.props.accountData}/>
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        accountData : state.accountPage.accountData
    }
};


export default connect(mapStateToProps,{setAccounts})(AccountContainer);