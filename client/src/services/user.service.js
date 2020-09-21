import axios from "axios"

const URI = "http://localhost:4000/";

class getProduct{
    products=()=>{
        axios.get(URI + "products").then(response=>{
            //products by user id
        })
    }
}

export default new getProduct()