import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from 'axios';


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
function Top() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        let url = `http://${window.location.hostname}:8080/api/get_product`;
        axios.get(url).then(res => {
          setProducts(...products, res.data.message);
        });
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                    <ItemGrid item xs={2} sm={4} md={3} key={index}>
                      <Item>{product.ProductName}<br />{product.Price}円</Item>
                    </ItemGrid>
                ))}
            </Grid>
        </Box>
    );
}
  export default Top;