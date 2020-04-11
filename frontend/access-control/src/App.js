import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import AccountContainer from './pages/Account/AccountContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
          <AccountContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
