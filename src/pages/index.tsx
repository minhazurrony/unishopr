import Head from 'next/head';
import React from 'react';
import { HomePage } from './HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>UniShopr | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
      <footer className={'footer'}>
        <p>footer content goes here</p>
      </footer>
    </>
  );
}
