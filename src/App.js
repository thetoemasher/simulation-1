import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      base_url: 'http://localhost:7574',
      inventory: []
    }
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get(`${this.state.base_url}/api/inventory`).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
