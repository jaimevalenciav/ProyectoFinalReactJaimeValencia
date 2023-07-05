import cart from './assets/cart.png';
import 'bootstrap/dist/css/bootstrap.css';
import './CartWidgetStyles.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    const numItems = totalQuantity()
    
    return (        
        <Link to='/cart'>            
            <img src={cart} alt="cart-widget" />            
            <span id="notificacion" className="badge rounded-pill badge-notification bg-danger text-white">{numItems}</span>
        </Link>
    )
}
export default CartWidget
