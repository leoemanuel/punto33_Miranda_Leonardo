import { Spinner } from "react-bootstrap"

export const Spinners = () =>{
    return(
        <Spinner animation="border" role="status" variant="success">
        <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}