// app/layout.js
'use client'; // Ensures this file is treated as a client component

import * as React from 'react';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from "./theme" // Adjust the path if necessary
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./lib/store/reducer"

export default function RootLayout({ children }) {
  // const customization = useSelector((state) => state.customization);
  // console.log(customization)
  const store = configureStore({ reducer });

  return (
    <html lang="en">
      <body>
      <Provider  store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
          {children}
        </ThemeProvider>
       </StyledEngineProvider>    </Provider> 
        </body>
    </html>
  );
}
