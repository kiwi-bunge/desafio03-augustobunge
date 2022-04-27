import logo from './pelotaMundial.png'
import './App.css';
import NavBar from './components/NavBar';

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
    </div>
  );
}

export default App;
