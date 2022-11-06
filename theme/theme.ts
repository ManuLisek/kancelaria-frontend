import { createTheme } from '@mui/material/styles';

export interface CustomTheme {
  palette: {
    primary: {
      main: string,
    },
    secondary: {
      main: string,
    },
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#CCA43B',
      dark: '#BB932A',
    },
    secondary: {
      main: '#E5E5E5',
    },
  },
});

export default theme;
