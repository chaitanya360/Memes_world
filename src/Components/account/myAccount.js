import React, { useState } from "react";
import UploadImage from "../upload/upload";
import MyMemes from "./myMemes";
import Myinfo from "./Myinfo";
import { Redirect } from "react-router-dom";

function MyAccount() {
  const [uploaded, setuploaded] = useState(false);
  const [isLogin, setIslogin] = useState(
    localStorage.getItem("isLogedIn") === "true"
  );

  return (
    <div>
      {isLogin ? <Myinfo /> : <Redirect to="/Memes_world/account/login" />}
      {isLogin ? (
        <UploadImage uploaded={uploaded} setuploaded={setuploaded} />
      ) : (
        ""
      )}
      {isLogin ? <MyMemes uploaded={uploaded} /> : ""}
    </div>
  );
}

export default MyAccount;
