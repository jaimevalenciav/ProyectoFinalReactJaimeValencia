import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
//import { getProductById } from '../../asyncElementos.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore' 
import { db } from '../../services/firebase/firebaseConfig' 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()   

    useEffect(() => {
        setLoading(true)
        const docRef =  doc(db,'items', itemId)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const product = {id: response.id, ...data}   
                setProduct(product)                    
            })
            .catch(error => {
                console.error(error)
            })
            .finally(()=> {
                setLoading(false)
            })
            console.log(product)
    },[itemId])     
    
    return(          
        <div className='ItemDetailContainer'>                       
            <ItemDetail {...product} />
        </div>        
    )
}

export default ItemDetailContainer