// import axios from "axios";

// // const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

// class FarmerProducts {
//   products = () => {
//     axios.get(URL + "products").then((response) => {});
//   };
// }

// export default new FarmerProducts();
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (e) => {
  const { name, value } = e.target;
  let err = this.state.errors;

  switch (name) {
    case "email":
      err.email = validEmailRegex.test(value) ? "" : "Please enter valid email";
      break;
    case "password":
      err.password =
        value.length < 8 ? "Password must be atleat 8 characters" : "";
      break;
    default:
      break;
  }

  if (this.state.confirmPassword.length === this.state.password.length - 1) {
    err.confirmPassword = "";
  } else {
    err.confirmPassword = "Password not matched";
  }

  this.setState({ [e.target.name]: e.target.value });
};

export default validateForm
