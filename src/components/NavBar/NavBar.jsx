import { useRef } from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import './NavBarStyles.css'
import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    const navRef = useRef()

    const showNabvar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
    return (
        <header>
            <div >
                <img src={logo} className="logo" id="logo" alt="logo" />
                <h3>El que al mundo Vino</h3>
            </div>
            <nav ref={navRef}>            
                <a href="/#">Tintos</a>
                <a href="/#">Blancos</a>
                <a href="/#">Rosados</a>
                <a href="/#">Espumantes</a>
                <a href="/#">Todos</a>
                <buttons className="nav-btn nav-close-btn" onClick={showNabvar}>
                    <FaTimes />
                </buttons>
                <CartWidget />
            </nav>
            <buttons className="nav-btn" onClick={showNabvar}>
                <FaBars />
            </buttons>
            
        </header>
    )
}

export default NavBar   