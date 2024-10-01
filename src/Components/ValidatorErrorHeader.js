import React from "react";

const ValidatorErrorHeader = () => {
  return (
    <div id="validator-error-header">
      <div
        className="jpui error error inverted primary animate alert"
        id="logon-error"
        role="region"
        aria-labelledby="inner-logon-error"
      >
        <div className="icon">
          <span id="type-icon-logon-error">
            <i
              className="jpui exclamation-color icon"
              id="icon-type-icon-logon-error"
              aria-hidden="true"
            />
          </span>
        </div>{" "}
        <div className="icon background" />{" "}
        <div className="content wrap" id="content-logon-error">
          <h2 className="title" tabIndex={-1} id="inner-logon-error">
            <span className="util accessible-text" id="icon-logon-error">
              Important:{" "}
            </span>
            We can't find that username and password. Try again.
          </h2>{" "}
        </div>
      </div>
    </div>
  );
};

export default ValidatorErrorHeader;
