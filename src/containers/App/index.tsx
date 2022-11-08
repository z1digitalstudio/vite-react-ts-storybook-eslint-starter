import reactLogo from '$/assets/react.svg';

import { Container, Title } from './styles';

function App() {
  return (
    <Container className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React</Title>
    </Container>
  );
}

export default App;
