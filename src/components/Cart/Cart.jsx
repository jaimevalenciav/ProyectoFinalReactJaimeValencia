import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const formatoPrecios = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const total = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        {cart.length === 0 ? (
            <div className="row">
                <h1 className="display-5 text-center">Carro sin productos</h1> 
                <Link to="/" className="btn btn-warning">Volver al Catálogo</Link>
            </div>
                     
        ) : (
          <div>
            <hr />
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-8 my-4">
                
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={item.imagen} alt={item.title} className="imgProduct" />
                    </div>
                    <div className="col-sm-8">
                        <h5 className="font-weight-bold">{item.title}</h5>
                        <h6>Cantidad: {item.quantity}</h6>
                        <h6>Precio: {formatoPrecios(item.precio)}</h6>
                        <h6>Sub-Total: {formatoPrecios(item.precio * item.quantity)}</h6>
                    </div>
                    <div className='col-sm-2'>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Borrar Producto</button>
                    </div>                    
                </div>
                <hr />
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <span className="total border border-secondary">Total: {formatoPrecios(total)}</span>              
            </div>
            <div className="d-flex justify-content-center">              
              <button className="btn btn-warning" onClick={handleClearCart}>Vaciar Carrito</button>
              <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
              <Link to="/" className="btn btn-warning">Volver al Catálogo</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

