import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetail.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter/Counter.jsx';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';


export const ItemDetail = ({id, precio, saldo, color, title, imagen, descripcion}) => {

    const [cantAgregada, setCantidadAgregada] = useState(0)
    const { addItem} = useContext(CartContext)
    const [ isCartClicked, setIsCartClicked] = useState(false)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)

        const item = {
            id,
            title,
            precio,
            saldo,
            imagen
        }
        addItem(item, quantity)
        setIsCartClicked(true)        
    }     

    return (
        <div className="CardItem">            
            <article >            
                <h2 className = "ItemHeader">{title}</h2>            
                <div className="divImagen">
                    <picture>
                        <img src={imagen} alt={title} className="ItemImg" />
                    </picture>
                </div>
                <div className="divTexto">    
                    <section>
                        <p className="Info">
                            Id: {id}
                        </p> 
                        <p className="Info">
                            Color: {color}
                        </p>
                        <p className="Info">
                            Descripción: {descripcion}
                        </p>                  
                        <p className="Info">
                            Precio: ${precio}
                        </p>
                        <p className="Info">
                            Stock: {saldo}un.
                        </p>
                        <footer className='ItemFooter'>
                            {
                                cantAgregada > 0 ? (
                                    <div>
                                        <Link to='/cart' className='btn btn-primary'>Ir a Pagar</Link>
                                        <Link to='/' className='btn btn-warning'>Volver al Catálogo</Link>
                                    </div>
                                    
                                    
                                ) : (
                                    <Counter inicial={1} stock={saldo} onAdd={handleOnAdd}/>
                                )
                            }                            
                        </footer>                
                    </section>                    
                </div>
            </article>
        </div>
    )
}

export default ItemDetail