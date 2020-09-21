import axios from "axios";

const URI = "http://localhost:4000/";

class AuthService {
  login(email, password) {
    return axios
      .post(URI + "login", {
        email,
        password,
      })
      .then((result) => {
        // if (response.data.token) {
        //   localStorage.setItem("user", JSON.stringify(response.data)); //store in localtring
        // }
        if (result.data) {
          let userData = result.data.response;
          localStorage.setItem("data", JSON.stringify(userData.email));
        }
        return result;
      });
  }
}

export default new AuthService();
