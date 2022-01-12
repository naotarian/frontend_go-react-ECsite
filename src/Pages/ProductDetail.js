// import * as React from 'react';
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import TestImage from "../images/product1.jpg";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
// import "./styles.css";
import SwiperCore, {
  Navigation
} from 'swiper';

SwiperCore.use([Navigation]);

const ImageGrid = styled(Grid)`
  width: 100%;
  border: 2px solid gray;
  border-radius: 10px;
  text-align: center;
`
const ItemGrid = styled(Grid)`
  padding: 1rem;
  text-align: center;
`

function ProductDetail(data) {
    let ProductData = data.location.state.data;
    console.log(ProductData)
    return (
       <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} columns={{ xs: 1, sm: 6, md: 12 }}>
            <ItemGrid item xs={7}>
              <ImageGrid>
                <Swiper navigation={true} className="mySwiper">
                  <SwiperSlide>
                    <img src={TestImage} alt="アイコン" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TestImage} alt="アイコン" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TestImage} alt="アイコン" />
                  </SwiperSlide>
                </Swiper>
              </ImageGrid>
            </ItemGrid>
            <ItemGrid item xs={5}>
              <Grid>{ProductData.ProductName}</Grid>
            </ItemGrid>
          </Grid>
        </Box>
    )
}
export default ProductDetail;