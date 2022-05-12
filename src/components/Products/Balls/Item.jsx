import '../../../../src/Products.css';
import ItemCount from '../../CounterComponent/Counter';



const Item = ( { name, img, price, stock, id } ) => {

  return (

    <div className="ballsCard hidden" id="balls">
        <h1> { name } </h1>
        <img src= { img } alt="world-cup-match-ball"/>
        <p> { price } </p>
        <ItemCount stock={stock} initial={1} />
    </div>

    

  )
}

export default Item