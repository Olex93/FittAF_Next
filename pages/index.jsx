import React, { useEffect, useState } from "react";
import JsScripts from "../components/JsScripts";
import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import axios from "axios";
import Head from "next/head";
import DashboardLeftNav from '../components/DashboardLeftNav'

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

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
      {!loading && (
        <>
          {data && <DashboardLeftNav />}

          {!data && <LandingPage />}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Home);
