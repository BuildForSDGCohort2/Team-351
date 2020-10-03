import axios from "axios"

const URI = "http://localhost:4000/";

class FarmerProducts{
    products=()=>{
        axios.get(URI + "products").then(response=>{
            
        })
    }
}


export default new FarmerProducts()

// export default  URL = "http://localhost:4000/";