import React from "react";
import NavBarComponent from "./Components/navigation/navBar";
import CardComponet from "./Components/home/cardComponent";
import Header from "./Components/header/headerComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountHandler from "./Components/account/index.js";

function WorkArea() {
  return (
    <div>
      <Header />
      <Router>
        <NavBarComponent />
        <Switch>
          <Route path="/Memes_world/" exact component={CardComponet} />
          <Route path="/Memes_world/account" exact component={AccountHandler} />
        </Switch>
      </Router>
    </div>
  );
}

export default WorkArea;
