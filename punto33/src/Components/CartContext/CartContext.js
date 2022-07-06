import React,{ createContext, useState} from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) =>{
        setCarrito([...carrito, item])
    }
    const vaciarCarrito=()=>{
        setCarrito([])
    }
    const removerDelCarrito=(id)=>{
        setCarrito(carrito.filter(prod => prod.id !==id))
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, prod)=>acc + prod.counter, 0)
    }

    const totalCompra = () =>{
        return carrito.reduce((acc, prod)=>acc + prod.price * prod.counter, 0)
    }

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            vaciarCarrito,
            totalCantidad,
            removerDelCarrito,
            totalCompra,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
















/* export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) =>{
        setCarrito([...carrito, item])
    }


    return(
        <CartContex.Provider value={{
            carrito,
            agregarAlCarrito
        }}>
        {children}
        </CartContex.Provider>
    )
} */

/*     
 
    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const totalCantidad = () => {
        return carrito.reduce((acc, prod)=>acc + prod.cantidad, 0)
    }

     */
