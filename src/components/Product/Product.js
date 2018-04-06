import React from 'react'

function Product(props) {
    let { name, price, img } = props.item
    return (
        <div>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default Product