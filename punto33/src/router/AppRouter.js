import {  useRoutes } from "react-router-dom"
import { CartView } from "../Components/CartView/CartView"
import { Checkout } from "../Components/Checkout/Checkout"
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer"


export const AppRouter = ( ) => {

    const routes = useRoutes([
        {path: "/", element: <ItemListContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: '/detail/:itemId', element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "/checkout", element: <Checkout/>}        
    ])

    return routes
}