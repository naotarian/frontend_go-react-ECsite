import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import logo from './logo.svg';
import './App.css';

const WrapperGrid = styled(Grid)`
  width: 90%;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Item = styled(Typography)`
  text-align: center;
  border: 2px solid #F2F2F2;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
`

const ItemGrid = styled(Grid)`
  padding: 2rem;
  height: 300px;
`
const titles = [
  {'title':'タイトル1'},
  {'title':'タイトル2'},
  {'title':'タイトル3'},
  {'title':'タイトル4'},
  {'title':'タイトル5'},
  {'title':'タイトル6'},
  {'title':'タイトル7'},
  {'title':'タイトル8'},
  ];
function App() {
  return (
    <WrapperGrid>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {titles.map((data, index) => (
          <ItemGrid item xs={2} sm={4} md={3} key={index}>
            <Item>{data.title}</Item>
          </ItemGrid>
        ))}
      </Grid>
    </Box>
    </WrapperGrid>
  );
}

export default App;
