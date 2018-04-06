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
      inventory: [],
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind( this );
    this.editProduct = this.editProduct.bind( this );
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get( `${this.state.base_url}/api/inventory` )
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
  }

  editProduct( item ) {
    this.setState({
      currentProduct: item
    })
  }
  
  render() {
    let { inventory, base_url, currentProduct } = this.state;
    return (
      <div>
        <Header />
        <Dashboard inventory={ inventory } getInventory={ this.getInventory } base_url={ base_url } editProduct={this.editProduct} />
        <Form getInventory={ this.getInventory } base_url={ base_url } currentProduct={ currentProduct } />
      </div>
    );
  }
}

export default App;
