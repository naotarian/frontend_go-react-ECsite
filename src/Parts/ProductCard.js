import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import ProductDetail from '../Pages/ProductDetail/test';
import ProductDetail from "../Pages/ProductDetail";

const ProductName = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 53px;
  font-size: 1.2rem!important;
`
const ProductIntroduction = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  height: 60px;
`
const Price = styled(Typography)`
  height: 30px;
  margin-top: 1rem!important;
`

function ProductCard(data) {
  const [expanded, setExpanded] = React.useState(false);
  let url = `http://${window.location.hostname}:8080`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const to = {
    pathname: '/product_detail',
    search: '',
    hash: '',
    state: { data: data.data }
  };
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://item-shopping.c.yimg.jp/i/n/fashionletter_sd9432_5"
        alt="green iguana"
      />
      <CardContent>
      {/*
       <CardActionArea onClick={() => ProductDetail(data.data)}> 
      
      */}
        <ProductName gutterBottom variant="h5" component="div">
          <Link to={to}>{data.data.ProductName}</Link>
        </ProductName>
        <ProductIntroduction variant="body2" color="text.secondary">
          {data.data.ProductIntroduction}
        </ProductIntroduction>
        <Price>
        {data.data.Price}円(税込)
        </Price>
      </CardContent>
    </Card>
  );
}
export default ProductCard;