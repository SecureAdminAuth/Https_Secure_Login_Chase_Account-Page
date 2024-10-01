import React from "react";

const Login_form = () => {
  return (
    <form id="login-form" method="POST" action="javascript:void(0);" noValidate>
      {" "}
      <div
        className="jpui fieldgroup logon-xs-toggle logon-floating-label userID-margin-top"
        id="userId"
      >
        <div className="jpui vertical">
          <div className="align-label-input floating-label__container">
            <div className="label-wrapper">
              <label
                className="jpui fieldlabel label-alignment vertical error"
                id="userId-label"
                htmlFor="userId-text-input-field"
                aria-hidden="false"
              >
                <span className="util accessible-text errorAdaText">
                  Error:
                </span>
                <span
                  className="util accessible-text"
                  id="userId-label-errorLabel"
                />
                Username{" "}
                <span
                  className="util accessible-text"
                  id="userId-label-accessible-text"
                />
              </label>{" "}
            </div>{" "}
            <div className="logon-xs-toggle" id="userId-text">
              {" "}
              <input
                min={0}
                className="jpui input logon-xs-toggle clientSideError"
                id="userId-text-input-field"
                placeholder
                format
                aria-describedby="  userId-input-field-label aggregator-security-banner"
                autoComplete="username"
                type="text"
                name="userId"
                data-validate="userId"
                required
                defaultValue
              />{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <div> </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div
        className="jpui fieldgroup logon-xs-toggle logon-floating-label"
        id="password"
      >
        <div className="jpui vertical">
          <div className="align-label-input floating-label__container">
            <div className="label-wrapper">
              <label
                className="jpui fieldlabel label-alignment vertical error"
                id="password-label"
                htmlFor="password-text-input-field"
                aria-hidden="false"
              >
                <span className="util accessible-text errorAdaText">
                  Error:
                </span>
                <span
                  className="util accessible-text"
                  id="password-label-errorLabel"
                />
                Password{" "}
                <span
                  className="util accessible-text"
                  id="password-label-accessible-text"
                />
              </label>{" "}
            </div>{" "}
            <div className="logon-xs-toggle" id="password-text">
              {" "}
              <input
                min={0}
                className="jpui input logon-xs-toggle clientSideError"
                id="password-text-input-field"
                placeholder
                format
                aria-describedby="  password-input-field-label"
                autoComplete="current-password"
                type="password"
                name="password"
                data-validate="password"
                required
                defaultValue
              />{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <div> </div>
          </div>
        </div>{" "}
      </div>
      <div
        className="jpui fieldgroup logon-xs-toggle logon-floating-label hidden sf-hidden"
        id="securityToken"
      >
        {" "}
      </div>{" "}
      <div className="row logon-xs-toggle">
        <div className="col-xs-6 rememberMe-checkbox-container">
          <div className="jpui checkbox" id="rememberMe">
            <div className="checkbox-flex">
              <div className="checkboxWrap">
                <input
                  className="checkbox__input"
                  type="checkbox"
                  id="input-rememberMe"
                  aria-label="This checked box means that we will remember your username.  Remember me"
                  name="rememberMe"
                  defaultValue="on"
                />{" "}
                <i className="jpui checkmark icon check" aria-hidden="true" />
              </div>{" "}
              <label htmlFor="input-rememberMe">
                {" "}
                <span className="checkbox-label" id="label-rememberMe">
                  Remember me{" "}
                </span>
              </label>
            </div>{" "}
          </div>
        </div>{" "}
        <div className="col-xs-6 token-checkbox-container">
          <div className="jpui checkbox useToken" id="useToken">
            <div className="checkbox-flex">
              <div className="checkboxWrap">
                <input
                  className="checkbox__input"
                  type="checkbox"
                  id="input-useToken"
                  aria-label="Shows content above. Use token"
                  name="rsaToken"
                  defaultValue="on"
                />{" "}
                <i className="jpui checkmark icon check" aria-hidden="true" />
              </div>{" "}
              <label htmlFor="input-useToken">
                {" "}
                <span className="checkbox-label" id="label-useToken">
                  Use token{" "}
                </span>
              </label>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <button
          type="submit"
          id="signin-button"
          className="jpui button focus fluid primary"
        >
          <span className="label">Sign in</span>{" "}
        </button>
      </div>{" "}
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
            />
          </a>
        </span>
      </div>{" "}
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
            />
          </a>
        </span>
      </div>
    </form>
  );
};

export default Login_form;
