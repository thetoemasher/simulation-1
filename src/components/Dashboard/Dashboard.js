import React, { Component } from 'react'
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let dashboard = this.props.inventory.map((item, i) => {
            return (
                <div key={i}>
                    <Product item={item}/>
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