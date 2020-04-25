import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AccountContainer from './pages/Account/AccountContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonalContainer from './pages/Personal/PersonalContainer';
import DeviceContainer from './pages/Device/DeviceContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import Login from './pages/Auth/Login';
import Logout from './pages/Auth/Logout';

export default class App extends React.Component{
  render() {
      return (
        <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" render={() => <AccountContainer />}></Route>
            </Switch>
            <Route path="/profile/:userId" render={() => <ProfileContainer />}></Route>
            <Route path="/personal" render={() => <PersonalContainer />}></Route>
            <Route path="/device" render={() => <DeviceContainer />}></Route>
            <Route path="/login" render={()=><Login />}></Route>
            <Route path="/logout" render={()=><Logout />}></Route>
          </div>
          <Footer />
        </div>
      );
  }
}


