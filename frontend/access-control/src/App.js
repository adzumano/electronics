import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AccountContainer from './pages/Account/AccountContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Auth/Login';
import Profile from './pages/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
          <Route path="/home" render={() => <AccountContainer />}></Route>
          <Route path="/profile" render={() => <Profile />}></Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
