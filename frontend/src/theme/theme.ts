import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5061c5',
      light: '#c9d5fd',
      dark: '#271b80',
    },
    secondary: {
      main: '#f50057',
    },
    divider: 'rgba(0,0,0,0.64)',
    warning: {
      main: '#F3D408',
      light: '#fddc5f',
      dark: '#bda504',
    },
    success: {
      main: '#3D853D',
      light: 'rgba(151,210,151,0.98)',
      dark: '#255625',
    },
  },
  typography: {
    h1: {
      fontSize: '35pt',
      fontWeight: 700,
    },
    h2: {
      fontSize: '25pt',
    },
    h3: {
      fontSize: '18pt',
      fontWeight: 200,
      lineHeight: 1,
    },
    h4: {
      fontSize: '14pt',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h5: {
      fontSize: '14pt',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h6: {
      fontSize: '14pt',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
  },
});
