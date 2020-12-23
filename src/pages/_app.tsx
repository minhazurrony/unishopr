import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../src/styles/global.css';
import '../components/Carousel/carousel.css';
import { customTheme } from '../styles/theme';
function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
