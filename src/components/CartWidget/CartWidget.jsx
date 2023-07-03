import cart from './assets/cart.png';
import './CartWidgetStyles.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style = {{display : totalQuantity > 0 ? '' : ''}}>
            <div>
                <img src={cart} alt="cart-widget" />            
                <span id="notificacion" class="badge rounded-pill badge-notification bg-danger text-white">{totalQuantity}</span>
            </div>
        </Link>
    )
}
export default CartWidget
