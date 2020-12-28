import Head from 'next/head';
import React from 'react';
import { HomePage } from './HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>UniShopr | </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main
        style={{
          fontFamily: 'Barlow Condensed',
          background: 'rgba(14, 43, 61, 0.05)',
        }}
      >
        <HomePage />
      </main>
      <footer>
        <p>footer content goes here</p>
      </footer>
    </>
  );
}
