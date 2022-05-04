import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../src/app/store';

import Layout from '../src/components/Layout/Layout';
import firebase from '../src/app/firebase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: any) {
  firebase();
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="top-center" rtl={false} newestOnTop={false} />
    </Provider>
  );
}
export default MyApp;
