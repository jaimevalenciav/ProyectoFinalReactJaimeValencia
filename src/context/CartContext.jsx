
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() =>{
        if (cart.length !== 0){
            localStorage.setItem("cart", JSON.stringify(cart))
            const storage = JSON.parse(localStorage.getItem("cart"));            
        }
        console.log(cart)
    }, [cart])

    
   const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart((prev) => [...prev, {...item, quantity}]) 
                     
        } else {
            console.error('El producto ya fue agregado')
        }        
    } 

   
      

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{  cart, addItem, totalQuantity, isInCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

