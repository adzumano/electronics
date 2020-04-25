import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router';
import Profile from './Profile';
import {setAccountProfile} from '../../state/reducer/profileReducer';
import PubSub from 'pubsub-js'

class ProfileContainer extends React.Component {
    componentDidMount () {
        this.getProfile();
    
    };
    getProfile(){
        let userId = this.props.match.params.userId
        axios
        .get(`http://127.0.0.1:8000/api/v1/accounts/account/detail/${userId}`)
        .then(response => { 
            this.props.setAccountProfile(response.data)
        })    
    };
    render () {
        return (
            <Profile 
            {...this.props} 
            profile={this.props.profile} 
            editProfile={this.editProfile}
            editAccountData={this.editAccountData}
            />
        )
    };
};

let mapStateToProps = (state) => {
    return {
        profile : state.profilePage.profile,
        profileData : state.profilePage.profileData,
        editAccountData : state.profilePage.editAccountData
    }
};
let WithUrlDataComponentContainer = withRouter(ProfileContainer);
// export default ProfileContainer;

export default connect (mapStateToProps,{setAccountProfile})(WithUrlDataComponentContainer)