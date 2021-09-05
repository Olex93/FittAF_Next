import Head from "next/head";
import HeadBootstrap from "../components/HeadBootstrap";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "../scss/circles.global.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
