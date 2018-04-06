import React from 'react'

function Product( props ) {
    let { name, price, img, id } = props.item
    return (
        <div>
            <img src={ img } alt={ name } />
            <p>{ name }</p>
            <p>${ price }</p>
            <button onClick={ () => props.deleteProduct( id )}>Delete</button>
            <button onClick={ () => props.editProduct( props.item )}>Edit</button>
        </div>
    )
}

export default Product