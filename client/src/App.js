import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";

import Home from "./components/landingPage";
import Navbar from "./components/header/navBar";
import About from "./components/header/about";
import Register from "./components/header/register";
import Farmer from "./components/farmers/farmerDashboard";
import Products from "./components/products";
import PageNotFound from "./components/landingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/farmer" component={Farmer} />
        <Route exact path="/products" component={Products} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
