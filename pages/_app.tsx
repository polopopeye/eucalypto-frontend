import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../src/app/store";

import "../styles/globals.css";

import Layout from "../src/components/Layout/Layout";
import iniApp from "../src/app/db";

import { getFirestore } from "firebase/firestore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
