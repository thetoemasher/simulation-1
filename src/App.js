import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      base_url: 'http://localhost:7574',
    }
  }
  
  render() {
    let { inventory, base_url, currentProduct } = this.state;
    return (
      <HashRouter>
        <div>
          <div>
          <Header />
          </div>
          <Switch>
            <Route path='/add' render={ () => (<Form getInventory={ this.getInventory } base_url={ base_url } currentProduct={ currentProduct } />)} />
            <Route path='/edit/:id' render={ () => (<Form getInventory={ this.getInventory } base_url={ base_url } currentProduct={ currentProduct } />)} />
            <Route path='/' render={ () => (<Dashboard inventory={ inventory } getInventory={ this.getInventory } base_url={ base_url } />)} />            
          </Switch>
        </div>

      </HashRouter>
    );
  }
}

export default App;
