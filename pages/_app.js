import Head from "next/head";
import HeadBootstrap from "../components/HeadBootstrap";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import '../scss/circles.global.scss'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <Script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          strategy="beforeInteractive"

        ></Script>
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          strategy="beforeInteractive"
        ></Script>

        <HeadBootstrap />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
