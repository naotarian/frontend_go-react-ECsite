import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const ProductName = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
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
`

function ProductCard(data) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        <ProductName gutterBottom variant="h5" component="div">
          {data.data.ProductName}
        </ProductName>
        <ProductIntroduction variant="body2" color="text.secondary">
          {data.data.ProductIntroduction}
        </ProductIntroduction>
        <Price>
        {data.data.Price}円
        </Price>
      </CardContent>
    </Card>
  );
}
export default ProductCard;