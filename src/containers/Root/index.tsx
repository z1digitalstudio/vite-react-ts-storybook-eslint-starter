import App from '$/containers/App';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <ThemeProvider theme={theme.base}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default Root;
