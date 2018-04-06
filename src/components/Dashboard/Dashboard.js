import React, { Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind( this )
    }

    deleteProduct( id ) {
        let { base_url, getInventory } = this.props
        axios.delete(`${ base_url }/api/product/${ id }` ).then( () => getInventory() );
    }

    render() {
        let dashboard = this.props.inventory.map(item => {
            return (
                <div key={ item.id }>
                    <Product item={ item } deleteProduct={ this.deleteProduct } editProduct={ this.props.editProduct } />
                </div>
            );
        })
        return (
            <div>
                { dashboard }
            </div>
        );
    }
}


export default Dashboard