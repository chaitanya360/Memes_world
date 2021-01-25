import React, { useState } from "react";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import { Redirect } from "react-router-dom";

function Myinfo() {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <div
      style={{
        width: window.innerWidth > 500 ? "90%" : window.innerWidth - 55,
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        height: "40px",
        fontSize: 20,
        top: "0px",
        right: "0px",
        position: "sticky",
        zIndex: "3",
        backgroundColor: "black",
        border: "1px solid grey",
        textAlign: "left",
        marginLeft: "55px",
        display: "flex",
        flex: 1,
        alignItems: "center",
        paddingLeft: "10px",
        backgroundImage:
          "radial-gradient(circle at 10% top, rgba(84,90,182,0.16) 0%, rgba(84,90,182,0) 95%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)",
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.8)" }}>
        {"@" + localStorage.userName}{" "}
      </span>

      <div style={{ right: 0, position: "absolute" }}>
        <ExitToAppTwoToneIcon
          onClick={() => {
            localStorage.clear();
            setIsLogin(false);
          }}
          style={{
            fontSize: "35",
            color: "white",
          }}
        />
      </div>
    </div>
  ) : (
    <Redirect to="/Memes_world/account/login" />
  );
}

export default Myinfo;
