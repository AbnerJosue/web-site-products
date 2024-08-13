import axios from "axios"
import { Product } from "../interfaces/product.interface"

const baseUrl = `http://gateway:8000/api/products`



// export const getAllProducts = async () => { 

//     let config = { 
//         url: `${baseUrl}/all`,
//         method: 'get', 
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//         data: {},
//     }
    

//     const response = await (await axios(config))?.data

//     return response;
// }