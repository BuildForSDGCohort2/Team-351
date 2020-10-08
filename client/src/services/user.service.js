import axios from "axios";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

class FarmerProducts {
  products = () => {
    axios.get(URL + "products").then((response) => {});
  };
}

export default new FarmerProducts();
