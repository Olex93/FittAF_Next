import React, { useEffect, useState } from "react";
import JsScripts from "../components/JsScripts";
import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import Head from "next/head";
import MemebrDashboard from "../components/MemberDashboard";
import { useSelector } from "react-redux";

const Home = (props) => {

  const globalState = useSelector((state) => state.reducer);

  return (
    <>
      <Head>
        <title>Fitt AF</title>
        <meta
          name="description"
          content="Online personal training delivered by professional fitness coaches."
        />
      </Head>
      <JsScripts />

      {globalState.loggedIn == "true" && <MemebrDashboard />}
      {globalState.loggedIn == "false" && <LandingPage />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Home);
