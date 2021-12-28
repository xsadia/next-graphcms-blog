import type { AppProps } from "next/app";
import Layout from "../../components/Layout";
import GlobalStyle from "../styles/global";
import nProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  nProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nProgress.done();
});

Router.events.on("routeChangeError", (url) => {
  nProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}

export default MyApp;
