'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Cambia este color por tu color primario
    },
    secondary: {
      main: '#121212', // Cambia este color por tu color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Cambia la fuente si lo deseas
  },
});

export default theme;