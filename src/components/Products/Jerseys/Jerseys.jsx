import React from 'react';
import '../../../../src/Products.css';

export default function JerseysCard( { title, description, image, price } ) {

  return (

    <div className="jerseysCard hidden" id="jerseys">
        <h1> { title } </h1>
        <h4> { description } </h4>
        <img src= { image } alt="world-cup-match-ball"/>
        <p> { price } </p>
    </div>
    

  )
}