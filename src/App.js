import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './Pages/Top';
import ProductDetail from './Pages/ProductDetail';
import Header from './Parts/Header';
import ProductConfirm from './Pages/ProductConfirm';
import CartDetail from './Molecules/CartDetail';
import CartDetailPage from './Pages/CartDetailPage';

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
            <Route exact path="/product_detail" component={ProductDetail} />
            <Route exact path="/item_confirm" component={ProductConfirm} />
            <Route exact path="/cart" component={CartDetail} />
            <Route exact path="/cart_detail" component={CartDetailPage} />
          </Switch>
        </BrowserRouter>
      </ContentsGrid>
    </WrapperGrid>
  );
}

export default App;
