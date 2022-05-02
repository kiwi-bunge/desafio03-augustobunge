import logo from './pelotaMundial.png'
import './App.css';
import NavBar from './components/NavBar';
import Fixtures from './components/Fixtures/Fixtures';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="Branding">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Prode Mundial 2022</h1>
        </div>
        <NavBar />
      </header>
      <Fixtures />
    </div>

    

  );
}

export default App;
