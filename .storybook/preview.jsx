import {ThemeProvider} from "styled-components";
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { addDecorator } from '@storybook/react';



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);