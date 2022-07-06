import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { validarDatos } from "../../helpers/validarDatos"
import { Navigate } from "react-router-dom"
import { collection, Timestamp, addDoc } from "firebase/firestore/lite"
import { db } from "../../firebase/config"

export const Checkout = () => {

    const {carrito, totalCompra} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validarDatos(values)){return}
        const orden = {
            buyer: {...values},
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }
        const orderRef = collection(db, "orders")
        addDoc(orderRef, orden)
            .then((res)=>{
                console.log(res.id)
            })
    }

    return(
        <>
            {carrito.length === 0
                ? <Navigate to="/"/>
                :
            <div className="container my-5">
                <h2>Resumen de compra</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        name = "nombre"
                        value = {values.nombre}
                        className="form-control my-2"
                        type="text"
                        placeholder="nombre"    
                    />
                    {values.nombre.length < 4 && <small>Nombre invalido</small>}
                    <input
                        onChange={handleInputChange}
                        name = "apellido"
                        value = {values.apellido}
                        className="form-control my-2"
                        type="text"
                        placeholder="apellido"    
                    />
                    {values.nombre.length < 4 && <small>Apellido invalido</small>}
                    <input
                        onChange={handleInputChange}
                        name = "email"
                        value = {values.email}
                        className="form-control my-2"
                        type="email"
                        placeholder="email"
                    />
                    {values.email.length < 4 && <small>Email invalido</small>}
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
               </div>
            }   
         </>
    )
}