import { theme } from '@chakra-ui/react';

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    fonts: {
      body: 'Barlow Condensed, sans-serif',
    },
    primary: {
      900: '#1c0103',
      800: '#3f0d11',
      700: '#66191e',
      600: '#8e252c',
      500: '#b53138',
      400: '#ce4a52',
      300: '#da7178',
      200: '#e69a9e',
      100: '#f4c1c4',
    },
    secondary: {
      900: '#1a1300',
      800: '#483900',
      700: '#785f04',
      600: '#a8850a',
      500: '#d8ab12',
      400: '#f2c42a',
      300: '#f5d157',
      200: '#f8de86',
      100: '#fcebb3',
    },

    textColor: {
      900: '#001019',
      800: '#0e2c3e',
      700: '#1e4966',
      600: '#2b668e',
      500: '#3983b6',
      400: '#509ccf',
      300: '#74b2da',
      200: '#9ac9e5',
      100: '#c1def1',
    },
  },
};
