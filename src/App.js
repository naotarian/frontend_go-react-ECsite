import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './Pages/Top';
import Header from './Parts/Header'

const WrapperGrid = styled(Grid)`
  width: 100%;
  margin: auto;
  margin-bottom: 4rem;
`;
const ContentsGrid = styled(Grid)`
  width: 90%;
  margin: auto;
  margin-top: 8rem;
`;
function App() {
  return (
    <WrapperGrid>
      <Header />
      <ContentsGrid>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Top} />
          </Switch>
        </BrowserRouter>
      </ContentsGrid>
    </WrapperGrid>
  );
}

export default App;
