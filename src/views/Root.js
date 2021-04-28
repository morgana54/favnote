import React from 'react';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello Roman</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
