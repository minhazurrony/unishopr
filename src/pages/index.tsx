import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { HomePage } from './HomePage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props: any) => props.theme.fontFamily};
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>UniShopr | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={{ fontFamily: '' }}>
        <GlobalStyle />
        <main>
          <HomePage />
        </main>
        <footer className={'footer'}>
          <p>footer content goes here</p>
        </footer>
      </ThemeProvider>
    </>
  );
}
