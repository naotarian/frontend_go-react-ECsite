import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

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
      <CardActionArea href='/test'>
        <ProductName gutterBottom variant="h5" component="div">
                {data.data.ProductName}
        </ProductName>
      </CardActionArea>
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