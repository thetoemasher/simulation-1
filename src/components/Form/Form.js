import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: null
        }
    }

    handleName( val ){
        this.setState({
            name: val
        })
    }

    handlePrice( val ){
        this.setState({
            price: val
        })
    }

    handleImg( val ){
        this.setState({
            img: val
        })
    }

    handleCancel() {
        this.setState({
            name: '',
            price: 0,
            img: '',
        })
    }

    createProduct() {
        let { name, price, img } = this.state;
        axios.post(`${ this.props.base_url }/api/product`, { name, price, img })
            .then(() => {
                this.props.getInventory();
                this.handleCancel();
            })
      }

      componentDidUpdate(oldProps) {
          let { name, price, img, id } = this.props.currentProduct;
        if (id !== oldProps.currentProduct.id) {
            this.setState({
                name: name,
                price: price,
                img: img,
                id: id
            })
        }
      }

      editProduct() {
          let { base_url, getInventory } = this.props
          let { name, price, img, id } = this.state;
          axios.put(`${ base_url }/api/product/${ id }`, { name, price, img, id })
            .then( () => getInventory())
      }

    render() {
        let { name, price, img, id } = this.state;
        return (
            <div>
                <input value={ img } type='text' placeholder="Image URL" onChange={e => this.handleImg(e.target.value)} />
                <input value={ name } type='text' placeholder="Product Name" onChange={e => this.handleName(e.target.value)} />
                <input value={ price } type='number' placeholder="Price" onChange={e => this.handlePrice(e.target.value)} />
                <button onClick={ () => this.handleCancel() }>Cancel</button>
                { id 
                ? 
                <button onClick={ () => this.editProduct() }>Save Changes</button>
                :
                <button onClick={ () => this.createProduct() }>Add to Inventory</button>
                }
            </div>
        );
    }
}


export default Form