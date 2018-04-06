import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
