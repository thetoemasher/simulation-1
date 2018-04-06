import React, { Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
        let { base_url, getInventory } = this.props
        axios.delete(`${base_url}/api/product/${id}`).then(() => getInventory());
    }

    render() {
        let dashboard = this.props.inventory.map((item, i) => {
            return (
                <div key={i}>
                    <Product item={item} deleteProduct={this.deleteProduct} />
                </div>
            );
        })
        return (
            <div>
                {dashboard}
            </div>
        );
    }
}


export default Dashboard