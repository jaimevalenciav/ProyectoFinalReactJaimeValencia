import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
import './NavBarStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <nav>
            <div >
                <img src={logo} className="logo" id="logo" alt="logo" />
                <h3>El que al mundo Vino</h3>
            </div>
            <div>
                <ul id="navbar">
                    <li><a href="">Tintos</a></li>
                    <li><a href="">Blancos</a></li>
                    <li><a href="">Rosados</a></li>
                    <li><a href="">Espumantes</a></li>
                    <li><a href="">Todos</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar   