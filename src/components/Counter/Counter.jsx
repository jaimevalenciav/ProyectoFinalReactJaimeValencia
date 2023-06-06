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
                    <h5 className="">Counter</h5>
                        <button className='btn btn-warning' id="botones" onClick={decrementar}>-</button> 
                        <h6> {cantidad} </h6>
                        <button className='btn btn-danger' id="botones" onClick={incrementar}>+</button>
                        <p></p>                   
                <button className='btn btn-success' id="btn-agregar" onClick={() => onAdd(cantidad)} disable={!stock}>Agregar</button>
                </div>
            </div>
        )
}

export default Counter;