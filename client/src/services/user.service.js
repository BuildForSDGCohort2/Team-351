// import axios from "axios";

// // const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

// class FarmerProducts {
//   products = () => {
//     axios.get(URL + "products").then((response) => {});
//   };
// }

// export default new FarmerProducts();

import LGA from "../components/header/lga";

const LGAs = LGA;

const doSomeThing = (nam) => {
  if (nam === "Abia") {
    //console.log ( LGAs.Abia[0] )
    //let lga = LGA.Abia
    //console.log(lga)

    return LGAs;
  }
};

export default doSomeThing;
