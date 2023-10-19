import React from 'react';
import { Router } from 'next/router';
import './globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Router initialProps={pageProps}>
      <Component {...pageProps} />
    </Router>
  );
}