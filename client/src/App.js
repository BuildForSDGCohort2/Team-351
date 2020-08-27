import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";
//import "./App.css";

import Home from "./components/landingPage";
import Navbar from "./components/navBar";
import PageNotFound from "./components/landingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
