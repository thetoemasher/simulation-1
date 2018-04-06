import React from 'react';
import { Link } from 'react-router-dom';

function Product( props ) {
    let { name, price, img, id } = props.item
    return (
        <div>
            <img src={ img } alt={ name } />
            <p>{ name }</p>
            <p>${ price }</p>
            <button onClick={ () => props.deleteProduct( id )}>Delete</button>
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
        </div>
    )
}

export default Product