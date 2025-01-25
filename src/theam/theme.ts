import { ThemeOptions } from '@mui/material';

// Define your custom theme
const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#0C65B6', // Main primary color
    },
    secondary: {
      main: '#ffcc00', // Main secondary color
    },
    background: {
      default: '#f5f5f5', // Default background color
    },
    text: {
      primary: '#333333', // Main text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font family
    h3:{
      fontSize: '1.4em',
      margin:' 0px 0px 8px',
      lineHeight: '1.75rem',
      fontWeight: 'bolder',
    },
    subtitle1:{
      color:'#265207',
      fontWeight:'bolder'
    }
  },
};

export default theme;
