import React from "react";
import Script from "next/script";

export default function DailyMail() {
  return (
    <div className="container-fluid signupBg">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Fitt AF Daily Email</h1>
        </div>
        <div className="col-md-6 order-2 order-md-1">
          <p>We’ve been told we’re the only reason people open their emails.</p>
          <p>
            We can promise a laugh, fitness motivation, and the odd kick up the
            ass from Alex and Frankie.
          </p>
          <p>Don’t take our word for it, sign up below!</p>
          <div>
            <div className="AW-Form-33474039"></div>
            <Script id="form-script" strategy="lazyOnload">
              {`(function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "//forms.aweber.com/form/39/33474039.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "aweber-wjs-moiavoacz")`}
            </Script>
          </div>
        </div>
      </div>
    </div>
  );
}
