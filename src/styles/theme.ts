import { theme } from '@chakra-ui/react';

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  styles: {
    global: {
      'body': {
        fontFamily: 'Barlow Condensed',
        background: 'rgba(14, 43, 61, 0.05)',
      },
      'p': {
        color: '#494947',
      },
    },
  },
  colors: {
    ...theme.colors,
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
  },
};
