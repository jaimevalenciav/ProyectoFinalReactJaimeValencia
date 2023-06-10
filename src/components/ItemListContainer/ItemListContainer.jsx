import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import 'bootstrap/dist/css/bootstrap.css';
import { getProducts } from "../../asyncElementos"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
    return (
        <div>            
            <ItemList  products={products} />            
        </div>        
    )
}
export default ItemListContainer