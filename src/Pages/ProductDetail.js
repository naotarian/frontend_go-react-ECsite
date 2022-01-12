import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import TestImage from "../images/product1.jpg";

const ImageGrid = styled(Grid)`
  width: 80%;
  border: 2px solid gray;
  border-radius: 10px;
  text-align: center;
`

function ProductDetail(data) {
    let ProductData = data.location.state.data;
    console.log(ProductData)
    return (
        <Grid>
            <ImageGrid>
                <img src={TestImage} alt="アイコン" />
            </ImageGrid>
            <Grid>{ProductData.ProductName}</Grid>
        </Grid>
    )
}
export default ProductDetail;