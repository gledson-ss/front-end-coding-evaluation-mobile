import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';
import Navigator from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
}
