import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/logon.css";
import "./css/blue-ui.css";
import "./css/MdsComponents-cpo.css";
import "./css/MdsFoundation-cpo.css";
import ValidatorErrorHeader from "./ValidatorErrorHeader";

export const LogonForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [useToken, setUseToken] = useState(false);
  const [isError, setIsError] = useState(false); // State to track error status

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username or password is blank
    if (!username || !password) {
      setIsError(true);
      return;
    }

    // Check username and password validation for User 1
    if (username === "joperry" && password === "chancey!") {
      navigate("/account"); // Navigate to account for User 1
    } 
    // Check username and password validation for User 2
    else if (username === "Lgomez65" && password === "Serapio") {
      navigate("/account2"); // Navigate to account2 for User 2
    } 
    // If credentials are incorrect
    else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-form-container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {isError && <ValidatorErrorHeader />}
            <div
              id="login-form"
              method="POST"
              action="javascript:void(0);"
              noValidate
            >
              <div
                className="jpui fieldgroup logon-xs-toggle logon-floating-label userID-margin-top"
                id="userId"
              >
                <div className="jpui vertical">
                  <div className="align-label-input floating-label__container floating">
                    <div className="label-wrapper"></div>
                    <div className="logon-xs-toggle" id="userId-text">
                      <input
                        min="0"
                        className="jpui input logon-xs-toggle clientSideError"
                        id="userId-text-input-field"
                        aria-describedby="userId-input-field-label aggregator-security-banner"
                        autoComplete="username"
                        type="text"
                        name="userId"
                        data-validate="userId"
                        required
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="jpui fieldgroup logon-xs-toggle logon-floating-label"
                id="password"
              >
                <div className="jpui vertical">
                  <div className="align-label-input floating-label__container">
                    <div className="label-wrapper"></div>
                    <div className="logon-xs-toggle" id="password-text">
                      <input
                        min="0"
                        className="jpui input logon-xs-toggle"
                        id="password-text-input-field"
                        aria-describedby="password-input-field-label"
                        autoComplete="current-password"
                        type="password"
                        name="password"
                        data-validate="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row logon-xs-toggle">
                <div className="col-xs-6 rememberMe-checkbox-container">
                  <div className="jpui checkbox" id="rememberMe">
                    <div className="checkbox-flex">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="input-rememberMe"
                        aria-label="This checked box means that we will remember your username.  Remember me"
                        name="rememberMe"
                        value="on"
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <label htmlFor="input-rememberMe">
                        <span className="checkbox-label" id="label-rememberMe">
                          Remember me
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 token-checkbox-container">
                  <div className="jpui checkbox useToken" id="useToken">
                    <div className="checkbox-flex">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="input-useToken"
                        aria-label="Shows content above. Use token"
                        name="rsaToken"
                        value="on"
                        onChange={() => setUseToken(!useToken)}
                      />
                      <label htmlFor="input-useToken">
                        <span className="checkbox-label" id="label-useToken">
                          Use token
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <button
                  type="submit"
                  id="signin-button"
                  className="jpui button focus fluid primary"
                >
                  <span className="label">Sign in</span>
                </button>
              </div>
              <div className="row">
                <span className="jpui link" id="forgotPassword-link-wrapper">
                  <a
                    className="link-anchor"
                    id="forgotPassword"
                    href="javascript:void(0)"
                    aria-label=" Forgot username/password? "
                  >
                    Forgot username/password?
                    <i
                      className="jpui progressright icon end-icon"
                      id="forgotPassword-endIcon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="jpui link" id="enrollment-link-wrapper">
                  <a
                    className="link-anchor last"
                    id="enrollment"
                    href="javascript:void(0)"
                    aria-label=" Not Enrolled? Sign Up Now. "
                  >
                    Not Enrolled? Sign Up Now.
                    <i
                      className="jpui progressright icon end-icon"
                      id="enrollment-endIcon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
