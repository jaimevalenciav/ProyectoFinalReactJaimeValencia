import cart from './assets/cart.png';
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" />
            
            <span id="notificacion" class="badge rounded-pill badge-notification bg-danger text-white">0</span>
        </div>
    )
}
export default CartWidget
