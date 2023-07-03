import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    const { color } = useParams() 
    
    useEffect(() => {
        setLoading(true)
        const collectionRef = color
            ? query(collection(db,'items'), where('color','==', color))
            : collection(db,'items')

            getDocs(collectionRef)
                .then(response => {
                    const products = response.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data}
                    })
                    setProducts(products)
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => {
                    setLoading(false)
                })
    },[color])

    return (
        <div>            
            <ItemList  products={products} />            
        </div>        
    )
}
export default ItemListContainer