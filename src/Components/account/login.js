import { React, useEffect, useState } from "react";
import "./css/login.css";
import { Redirect, useHistory } from "react-router-dom";
import { useLoading, ThreeDots } from "@agney/react-loading";
const loginUrl = "https://chaitanya360.pythonanywhere.com/api/login/";
const registerUrl = "https://chaitanya360.pythonanywhere.com/api/register/";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginTriggered, setLoginTriggered] = useState(false);
  const [registerTriggered, setRegisterTriggered] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formLog, setformlog] = useState(false);
  const [userId, setuserId] = useState(false);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="30" />,
  });

  if (userId) {
    console.log("inside user id");

    getUserid();
  }

  function handleLoginClick() {
    setUsernameError(false);
    setPasswordError(false);
    setformlog(false);
    setLoginTriggered(true);
    fetch(loginUrl, {
      method: "POST",

      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("from django: ", json);
        setLoginTriggered(false);
        if (json.access) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("isLogedIn", "true");
          localStorage.setItem("userName", username);

          setAccessToken(json.access);
          setRefreshToken(json.refreshToken);
          console.log("login success!");
          getUserid();
          setLoginSuccess(true);
        } else if (json.username) {
          setUsernameError(json.username);
        } else if (json.password) {
          setPasswordError(json.password);
        } else if (json.detail) {
          setformlog("No Account Exist Register To create");
        }
      })
      .catch((reject) => console.log("something went wrong", reject));
  }

  function getUserid() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + { accessToken });

    fetch(
      "https://chaitanya360.pythonanywhere.com/api/get_user_id?username=" +
        username
    )
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("userId", result.id[0][0]);
        console.log("I am her...................", result.id[0][0]);
        setuserId(true);
      })
      .catch((error) => console.log("error", error));
  }

  function hadleRegisterClick() {
    setUsernameError(false);
    setPasswordError(false);
    setformlog(false);
    setRegisterTriggered(true);
    try {
      fetch(registerUrl, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          password2: password, //by passing this i'll do it later
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setRegisterTriggered(false);
          console.log("from django: ", json);
          if (json.username) {
            if (json.username == username) {
              setformlog("register success! login to continue");
            } else {
              setUsernameError(json.username);
            }
          } else if (json.password) {
            setPasswordError(json.password[0]);
          } else if (json.detail) {
            setformlog("No account exist: Register to create");
          }
        })
        .catch((reject) => console.log("something went wrong", reject));
    } catch (error) {
      console.log(error, "something went wrong");
    }
  }

  return !loginSuccess ? (
    <div>
      <div className="body"></div>
      <div className="overlay">
        <div className="ui-panel login-panel animated bounceInDown">
          <div className="login-form">
            <div className="subtitle">Login or register</div>
            {formLog && (
              <span style={{ color: "red", marginBottom: "5px" }}>
                {formLog}
              </span>
            )}
            <label style={{ marginTop: 30 }}>
              {usernameError && (
                <span style={{ color: "red", marginBottom: "5px" }}>
                  {usernameError}
                </span>
              )}
              <input
                type="text"
                placeholder="Username"
                className="input_login"
                style={{ marginTop: 0 }}
                value={username}
                onChange={(t) => {
                  setUsername(t.target.value);
                  setUsernameError(false);
                  setformlog(false);
                }}
              />
            </label>
            <label style={{ marginTop: 10 }}>
              {passwordError && (
                <span style={{ color: "red", marginBottom: "5px" }}>
                  {passwordError}
                </span>
              )}
              <input
                type="password"
                placeholder="Password"
                className="input_login"
                style={{ marginTop: 0 }}
                value={password}
                onChange={(t) => {
                  setPassword(t.target.value);
                  setPasswordError(false);
                  setformlog(false);
                }}
              />
            </label>
          </div>

          <footer>
            <div className="left form-actions">
              <button
                href="#login"
                className="ui-button inactive login"
                onClick={handleLoginClick}
              >
                {!loginTriggered && <span>Login </span>}
                {loginTriggered && (
                  <section
                    {...containerProps}
                    style={{
                      zIndex: 2,
                      height: "20px",
                      width: "30px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    {indicatorEl}
                  </section>
                )}
              </button>

              <button
                href="#register"
                className="ui-button inactive register"
                onClick={hadleRegisterClick}
              >
                {!registerTriggered && <span>Register </span>}
                {registerTriggered && (
                  <section
                    {...containerProps}
                    style={{
                      zIndex: 2,
                      height: "20px",
                      width: "30px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    {indicatorEl}
                  </section>
                )}
              </button>
            </div>
            {/* <div className="right social-login">
              Login with
              <i className="fa fa-fw fa-twitter ml-1"></i>
              <i className="fa fa-fw fa-facebook"></i>
              <i className="fa fa-fw fa-google-plus"></i>
            </div> */}
            <br />
          </footer>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/Memes_world/account" />
  );
};

export default LoginPage;
