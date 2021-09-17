import Head from "next/head";
import HeadBootstrap from "../components/HeadBootstrap";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "../scss/circles.global.scss";
import Script from "next/script";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
