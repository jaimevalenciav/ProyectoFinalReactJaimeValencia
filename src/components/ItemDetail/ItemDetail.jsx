import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetail.css'

import Counter from '../../components/Counter/Counter.jsx';

const ItemDetail = ({id, precio, saldo, color, title, imagen, descripcion}) => {
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
                            <Counter inicial={1} stock={saldo} onAdd={(cantidad) => console.log('cantidad agregada ', cantidad)}/>
                        </footer>                
                    </section>
                    
                </div>
            </article>
        </div>
    )
}

export default ItemDetail