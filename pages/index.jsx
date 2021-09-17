import React, { useEffect, useState } from "react";
import JsScripts from "../components/JsScripts";
import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import axios from "axios";

const Home = (props) => {
  const [data, setData] = useState(null);

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <JsScripts />
      {data && (
        <div>
          <p>You are logged in</p>
        </div>
      )}

      {!data && <LandingPage />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Home);
