import logo from './pelotaMundial.png'
import ballImage2 from './mechta.png'
import ballImage3 from './brazuca.png'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Products/Balls/ItemListContainer';


function App() {

  return (
    <div className="App">

        <NavBar className="App-header" />

      <div className="productsCards">
        <ItemListContainer title="Al-Rihla" description="2022 World Cup Official Match Ball" image= { logo } price="$ 98.49" />
        <ItemListContainer title="Adidas Mechta" description="2018 World Cup Official Match Ball" image= { ballImage2 } price="$ 68.49" />
        <ItemListContainer title="Brazuca Final Rio" description="2014 World Cup Official Match Ball" image= { ballImage3 } price="$ 38.49" />
      </div>
    </div>
  );

}

export default App;
