import React from "react";
import Script from "next/script";

export default function FacebookGroup() {
  return (
    <div class="container-fluid signupBg">
      <div class="row">
        <div className="col-12">
          <h1 class="signupHeading">Join our FREE private Facebook group</h1>
        </div>
        <div class="col-md-6 order-2 order-md-1">
          <p>In our fitness communçity you’ll find:</p>
          <ul>
            <li>Workouts</li>
            <li>Challenges</li>
            <li>Q&A's to answer your questions direct</li>
            <li>Educational videos</li>
            <li>A fun community with others on a similar journey like you!</li>
          </ul>
          <p>
            Type in your email below so we can send you the link to join, see
            you on the other side!
          </p>
        </div>

        <div class="col-md-6 order-md-2 my-auto imgDiv">
          <div class="AW-Form-33474039"></div>
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
  );
}
