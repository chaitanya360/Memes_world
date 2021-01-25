import React from "react";
import NavBarComponent from "./Components/navigation/navBar";
import CardComponet from "./Components/home/cardComponent";
import Header from "./Components/header/headerComponent";
import uploadImage from "./Components/upload/upload.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountHandler from "./Components/account/index.js";
import LoginPage from "./Components/account/login.js";
import MyAccount from "./Components/account/myAccount.js";
import Myinfo from "./Components/account/Myinfo";
function WorkArea() {
  return (
    <div>
      <Header />
      <Router>
        <NavBarComponent />
        <Switch>
          <Route path="/Memes_world/upload" component={uploadImage} />
          <Route path="/Memes_world/" exact component={CardComponet} />
          <Route path="/Memes_world/account" exact component={AccountHandler} />
          <Route path="/Memes_world/myinfo" exact component={Myinfo} />
          <Route
            path="/Memes_world/account/myaccount"
            exact
            component={MyAccount}
          />
          <Route
            path="/Memes_world/account/login"
            exact
            component={LoginPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default WorkArea;
