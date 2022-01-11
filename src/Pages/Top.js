import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from 'axios';
import ProductCard from '../Parts/ProductCard';


const ItemGrid = styled(Grid)`
  padding: 1rem;
  text-align: center;
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
            <Grid container spacing={4} columns={{ xs: 1, sm: 6, md: 12 }}>
                {products.map((product, index) => (
                    <ItemGrid item xs={2} sm={4} md={3} key={index}>
                      <ProductCard data={product} />
                    </ItemGrid>
                ))}
            </Grid>
        </Box>
    );
}
  export default Top;