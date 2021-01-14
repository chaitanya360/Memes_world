import { React, useState } from "react";
import MyAccount from "./myAccount.js";
import LoginPage from "./login.js";
const AccountHandler = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <UserInfo />;

  function UserInfo() {
    return isAuthenticated ? <MyAccount /> : <LoginPage />;
  }
};

export default AccountHandler;
