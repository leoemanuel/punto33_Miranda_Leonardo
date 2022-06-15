import { stock } from "../products/products"


export const pedirDatos=() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        }, 3000)
    })
}