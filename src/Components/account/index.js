import { React, useState } from "react";
import { Redirect } from "react-router-dom";
import MyAccount from "./myAccount.js";
const AccountHandler = () => {
  const [isLogedIn, setIsLogedIn] = useState(
    localStorage.getItem("isLogedIn") === "true"
  );

  function handleLogout(value) {
    console.log(value);
  }

  return isLogedIn ? (
    <MyAccount />
  ) : (
    <Redirect to="/Memes_world/account/login" />
  );
};

export default AccountHandler;
