import React from 'react';
import '../../../../src/Products.css';

 const ItemListContainer = ( { title, description, image, price } ) => {

  return (

    <div className="ballsCard hidden" id="balls">
        <h1> { title } </h1>
        <h4> { description } </h4>
        <img src= { image } alt="world-cup-match-ball"/>
        <p> { price } </p>
    </div>
    

  )
}

export default ItemListContainer