import React from 'react';
import Login from './component/Login';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Poppins, Arial, sans-serif;
  }
 
`;

const AppContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Login />
    </AppContainer>
  );
}

export default App;
