import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import 'bootstrap/dist/css/bootstrap.css';
import { getProducts, getProductsByCategory } from "../../asyncElementos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { color } = useParams() 
    
    useEffect(() => {
        const asyncFunc = color ? getProductsByCategory : getProducts
        asyncFunc(color)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [color])
    return (
        <div>            
            <ItemList  products={products} />            
        </div>        
    )
}
export default ItemListContainer