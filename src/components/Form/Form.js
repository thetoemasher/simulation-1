import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    // componentDidMount() {
    //     if( this.props.match.params.id ) {
    //         let { id } = this.props.match.params
    //         axios.get(`${ this.props.base_url }/api/inventory${ id }`)
    //         .then( res => {
    //             this.setState({
    //                 name: res.name,
    //                 price: res.price,
    //                 img: res.img,
    //                 id: res.id
    //             })
    //         })
    //     }
    // }

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
                <Link to='/'>
                    <button onClick={ () => this.handleCancel() }>Cancel</button>
                </Link>
                { id 
                ? 
                <Link to='/'>
                    <button onClick={ () => this.editProduct() }>Save Changes</button>
                </Link>
                :
                <Link to='/'>
                    <button onClick={ () => this.createProduct() }>Add to Inventory</button>
                </Link>
                }
            </div>
        );
    }
}


export default Form