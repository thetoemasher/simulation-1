import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleName(val){
        this.setState({
            name: val
        })
    }

    handlePrice(val){
        this.setState({
            price: val
        })
    }

    handleImg(val){
        this.setState({
            img: val
        })
    }

    handleCancel() {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    render() {
        let { name, price, img } = this.state;
        return (
            <div>
                <input value={ img } type='text' placeholder="Image URL" onChange={e => this.handleImg(e.target.value)} />
                <input value={ name } type='text' placeholder="Product Name" onChange={e => this.handleName(e.target.value)} />
                <input value={ price } type='number' placeholder="Price" onChange={e => this.handlePrice(e.target.value)} />
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        );
    }
}


export default Form