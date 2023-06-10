import 'bootstrap/dist/css/bootstrap.css';
import './CounterStyles.css';
import { useState } from 'react';

const Counter = ({inicial, stock, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
            
        }
    }
    const decrementar = () => {
            if (cantidad > 1) {
                setCantidad(cantidad - 1);
            }
        }

        return (            
            <div className="card">
                <div className="card-body">                    
                        <button className='btn btn-warning' id="botones" onClick={decrementar}>-</button> 
                        <span> {cantidad} </span>
                        <button className='btn btn-warning' id="botones" onClick={incrementar}>+</button>
                                         
                <button className='btn btn-warning' id="btn-agregar" onClick={() => onAdd(cantidad)} disable={!stock}>Agregar</button>
                </div>
            </div>
        )
}

export default Counter;