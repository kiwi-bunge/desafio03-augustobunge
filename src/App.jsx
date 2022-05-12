import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Products/Balls/ItemListContainer';




function App() {

  return (
    <div className="App">

      <NavBar className="App-header" />      

      <ItemListContainer />

    </div>
  );

}

export default App;
