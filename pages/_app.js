import Head from "next/head";
import HeadBootstrap from "../components/HeadBootstrap";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "../scss/circles.global.scss";
import Script from "next/script";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store";
import { useStore } from "react-redux";

export default wrapper.withRedux(({Component, pageProps}) => {
  const store = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />

          <HeadBootstrap />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </PersistGate>
  );
});