import React from "react";

export default function Navbar(props) {
  const [navState, setNavState] = React.useState("250px");
  function toggleNav() {
    console.log("hi");
    if (navState === "0px") {
      setNavState("250px");
    } else {
      setNavState("0px");
    }
  }

  return (
    <div>
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="/styles.css" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ededed" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="theme-color" content="#ededed"></meta>
      <div id="mySidenav" class="sidenav" style={{ width: navState }}>
        <a class="closebtn">&times;</a>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/membership-details">Membership Details</a>
        <a href="/member-transformations">Member Transformations</a>
        <a href="/contact">Contact Us</a>
      </div>

      <nav class="navbar bg-dred bottom-shadow">
        <a class="navbar-brand" href="/">
          <img
            src="images/FittAF_logo_white.png"
            class="logoImg"
            alt="FittAF Logo."
          />
        </a>
        <button type="button" class="grow hamburger transparent" onClick={() => toggleNav()}>
          <img
            src="/images/hamburger.png"
            class="hamburger"
            alt="Hamburger menu icon."
          />
        </button>
      </nav>
    </div>
  );
}
