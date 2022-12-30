import React,{useMemo} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from  '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import {BrowserRouter, Router, Route} from 'react-router-dom';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
          </Route>
        </Routes>
      </ThemeProvider>        
      </BrowserRouter>

    </div>
  );
}

export default App;
