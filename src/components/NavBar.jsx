import logo from '../../src/pelotaMundial.png'
import Button from './Button';
import CartWidget from './CartWidget';

function NavBar() {


    return (
        <nav className="App-navbar">
            <img src= { logo } className="App-logo" alt="logo" />
            <h1>2022 World Cup Official Shop</h1>
            <Button text="Match Balls" />
            <Button text="Jerseys" />
            <Button text="Shorts" /> 
            <CartWidget />          
        </nav>
    )
}

export default NavBar