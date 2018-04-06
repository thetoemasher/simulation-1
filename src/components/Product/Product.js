import React from 'react'

function Product(props) {
    let { name, price, img, id } = props.item
    return (
        <div>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={() => props.deleteProduct(id)}>Delete</button>
        </div>
    )
}

export default Product