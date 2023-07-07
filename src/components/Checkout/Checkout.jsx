import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './Checkout.css'

const Checkout = () => {
    
    const { cart, totalQuantity, totalPrice, clearCart} = useContext(CartContext)
    const { register, handleSubmit } = useForm()
    const [ pedidoId, setPedidoId] = useState()
    
    const crearOrden = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalQuantity(),
            precioTotal: totalPrice()
        }

        console.log(pedido)
        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                clearCart()
            })

    }

    if(pedidoId){
        return (
            <div className="orderId">
                <div className='row'>
                <h1>Hemos procesado tu compra satisfactoriamente.</h1>
                <p>el ID de tu comprobante de compra es: </p><span className="comprobanteId border border-secondary">{pedidoId}</span>
                </div>
                <div className='row'>
                    <Link to="/" className="btn btn-warning btn-volver">Volver al Catálogo</Link>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="tituloCheckout">
                <h1 >Checkout</h1>
            </div>
                       
            <form className="formulario" onSubmit={handleSubmit(crearOrden)}>
                <div class="mb-3">
                  <label  class="form-label">Nombre del Comprador</label>
                  <input type="text" class="form-control" {...register("nombre")}/>                  
                </div>
                <div class="mb-3">
                  <label  class="form-label">Dirección de email</label>
                  <input type="email" class="form-control"  {...register("email")}/>
                  <div  class="form-text">* Nunca compartiremos esta información.</div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Número de teléfono</label>
                  <input type="number" class="form-control" {...register("telefono")}/>
                </div>
                
                <button type="submit" class="btn btn-warning enviar">Comprar</button>
            </form>
        </div>
    )


}



export default Checkout