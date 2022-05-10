import '../../../../src/Products.css';
import ItemCount from '../../CounterComponent/Counter';


const ItemListContainer = ( { title, description, image, price } ) => {

  return (

    <div className="ballsCard hidden" id="balls">
        <h1> { title } </h1>
        <h4> { description } </h4>
        <img src= { image } alt="world-cup-match-ball"/>
        <p> { price } </p>
        <ItemCount stock="10" initial={1} />
    </div>
    

  )
}

export default ItemListContainer