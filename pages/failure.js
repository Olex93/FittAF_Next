import React from "react";

export default function Failure() {
  return (
    <div className="signupBg fullHeight">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="signupHeading">Uh Oh!</h1>
            <p>
              There has been a technical problem. Please try again or contact us
              at <a href="mailto:Fittafmail@gmail.com">Fittafmail@gmail.com</a>{" "}
            </p>

            <div className="col-md-6 my-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
