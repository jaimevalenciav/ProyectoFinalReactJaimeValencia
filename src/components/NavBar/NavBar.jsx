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
                <a href="/#" className="titulo"><img src={logo} className="logo" id="logo" alt="traer todo" /></a>    
                <a href="/#" className="titulo"><h3>El que al mundo Vino</h3></a>
            </div>
            <nav ref={navRef}>            
                <a href="/color/tinto">Tintos</a>
                <a href="/color/blanco">Blancos</a>
                <a href="/color/rosado">Rosados</a>
                <a href="/color/espumante">Espumantes</a>
                <a href="/#">Todos</a>
                <buttons className="nav-btn nav-close-btn" onClick={showNabvar}>
                    <FaTimes />
                </buttons>
                
            </nav>
            <CartWidget />
            <buttons className="nav-btn" onClick={showNabvar}>
                <FaBars />
            </buttons>
            
        </header>
    )
}

export default NavBar   