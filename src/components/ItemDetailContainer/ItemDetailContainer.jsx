import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import { getProductById } from '../../asyncElementos.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(2)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer