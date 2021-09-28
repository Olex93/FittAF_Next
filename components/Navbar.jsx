import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../scss/navbar.module.scss";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

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
        <div className={styles.leftMenu}>
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
          <Link href="/login">
            <a className={styles.logIn}>
              Customer Portal{" "}
              <LoginIcon sx={{ marginLeft: "10px", fontWeight: 'bold' }} width={30} height={30} />
            </a>
          </Link>
        </div>

        <div className={styles.rightMenu}>
          <a className={styles.hamburger} onClick={toggleNav}>
            Menu <MenuIcon sx={{ marginLeft: "10px", fontWeight: 'bold' }} width={30} height={30} />
          </a>
        </div>
      </nav>
    </>
  );
}
