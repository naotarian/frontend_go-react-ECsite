import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import logo from './logo.svg';
import './App.css';

const WrapperGrid = styled(Grid)`
  width: 90%;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

function App() {
  return (
    <WrapperGrid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </WrapperGrid>
  );
}

export default App;
