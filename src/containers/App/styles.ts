import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  h1 {
    font-size: 50px;
  }

  .logo {
    height: 9rem;
    padding: 1.5rem;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
`;
