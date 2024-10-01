import React from "react";
import "./css/logonbox.css";
import "./css/home.min.css";
import { useNavigate } from "react-router-dom";

const HomeLoginBox = () => {
  const navigate = useNavigate();

  const handleSignInButtonClick = () => {
    // Navigate to the LoginPage
    navigate("/login");
  };

  return (
    <div className="login loginreference" style={{ position: 'relative' }}>
      <div className="login tokenlogin">
        <div className="signin-module__wrapper">
          <div id="signin-module" className="signin-module__inner">
            <div
              className="cpo-signin-container"
              style={{
                zIndex: "1",
              }}
            >
              <div
                className="cpo-signin signin jpui raised segment sigin-box"
                id="logonbox"
                style={{ opacity: "1", zIndex: "1" }}
              >
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="row">
                    <p className="signin--welcome">
                      <span className="signin--welcome-prospect" style={{}}>
                        Welcome
                      </span>
                      <span
                        className="signin--welcome-returning"
                        style={{ display: "none" }}
                      >
                        Welcome back
                      </span>
                    </p>
                  </div>
                  <div className="field row loginBtn">
                    {/* Attach handleSignInButtonClick to onClick event */}
                    <button
                      className="jpui fluid button chase-button siginbox-button chaseanalytics-track-link signin--button"
                      onClick={handleSignInButtonClick}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="row">
                    <a
                      className="jpui primary link last chaseanalytics-track-link"
                      href="https://secure.chase.com/web/auth/enrollment#/enroll/onlineEnrollment/gettingStarted/index?LOB=COLLogon"
                      data-pt-name="unknwnenroll"
                    >
                      Not enrolled? Sign up now.
                      <span className="signin--primary-link--icon icon-right-progress" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sigin-box__container hide sf-hidden"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoginBox;
