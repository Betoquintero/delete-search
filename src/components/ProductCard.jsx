import React from 'react'

export default function  ProductCard(props){
    const {product: {name, _id}, onDelete} = props;

    return (
    <div className="products" >
    <p>{name}</p>
    <button onClick={() => onDelete(_id)}>Delete</button>
    </div>
    )    
}