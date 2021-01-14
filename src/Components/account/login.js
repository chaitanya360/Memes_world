import React from "react";
import "./css/login.css";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="body"></div>
      <div className="overlay">
        <div className="ui-panel login-panel animated bounceInDown">
          <div className="login-form">
            <div className="subtitle">Login or register</div>
            <input type="text" placeholder="Username" className="input_login" />
            <input
              type="password"
              placeholder="Password"
              className="input_login"
            />
          </div>

          <footer>
            <div className="left form-actions">
              <button href="#login" className="ui-button inactive login">
                Login
              </button>
              <button href="#register" className="ui-button inactive register">
                Register
              </button>
            </div>
            <div className="right social-login">
              Login with
              <i className="fa fa-fw fa-twitter ml-1"></i>
              <i className="fa fa-fw fa-facebook"></i>
              <i className="fa fa-fw fa-google-plus"></i>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
