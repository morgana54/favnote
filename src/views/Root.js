import React from 'react';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Card from 'components/molecules/Card';
import bulb from 'assets/icons/bulb.svg';
// import Heading from 'components/atoms/Heading';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello Roman</h1>
      <Button>Close / Save</Button>
      <ButtonIcon icon={bulb} active />
      <Input search placeholder="search" />
      <Card />
    </ThemeProvider>
  </div>
);

export default Root;
