import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetail.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter/Counter.jsx';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id, precio, saldo, color, title, imagen, descripcion}) => {

    const [cantAgregada, setCantidadAgregada] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)

        const item = {
            id,
            title,
            precio
        }
        addItem(item, quantity)
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
                        <footer className='ItemFooter'>
                            {
                                cantAgregada > 0 ? (
                                    <Link to='/cart' className='btn btn-primary'>Finalizar Compra</Link> 
                                ) : (
                                    <Counter inicial={1} stock={saldo} onAdd={(handleOnAdd)}/>
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