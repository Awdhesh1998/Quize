import  { FunctionComponent, PropsWithChildren, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Optional: Provides baseline styles
import { createTheme } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(theme) : createTheme(theme);
}

const AppThemeProvider: FunctionComponent<PropsWithChildren> = ({ children}) =>{

  const [state] = useState({darkMode:false});
  
  const currentTheme = useMemo(
    () => getThemeByDarkMode(state.darkMode),
    [state.darkMode] // Observe AppStore and re-create the theme when .darkMode changes
  );


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
