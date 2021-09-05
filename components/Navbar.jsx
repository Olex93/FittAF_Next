import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../scss/navbar.module.scss";
import Image from "next/image";

export default function Navbar(props) {
  const [navState, setNavState] = React.useState("hide");

  const toggleNav = (e) => {
    // e.preventDefault();
    if (navState === "hide") {
      setNavState("show");
    } else {
      setNavState("hide");
    }
  };

  return (
    <>
      <div id="mySidenav" className={`${styles.sidenav} ${navState}`}>
        <a className={styles.closebtn} onClick={toggleNav}>
          &times;
        </a>
        <Link href="/">
          <a onClick={toggleNav}>Home</a>
        </Link>
        <Link href="/about-us">
          <a onClick={toggleNav}>About Us</a>
        </Link>
        <Link href="/membership-details">
          <a onClick={toggleNav}>Membership Details</a>
        </Link>
        <Link href="/member-transformations">
          <a onClick={toggleNav}>Member Transformations</a>
        </Link>
        <Link href="/contact">
          <a onClick={toggleNav}>Contact Us</a>
        </Link>
      </div>

      <nav className="navbar bg-dred bottom-shadow">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src="/images/FittAF_logo_white.png"
              className="logoImg"
              alt="FittAF Logo."
              width={60}
              height={60}
            />
          </a>
        </Link>
        <button className="grow hamburger transparent" onClick={toggleNav}>
          <Image
            src="/images/hamburger.png"
            className="hamburger"
            alt="Hamburger menu icon."
            width={30}
            height={30}
          />
        </button>
      </nav>
    </>
  );
}
