// import * as React from 'react';
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import TestImage from "../images/product1.jpg";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Review from '../Parts/Review';
import ReadReview from '../Parts/ReadReview';
import "../css/common.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
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
const TextGrid = styled(Grid)`
  text-align: left;
  padding: 1rem;
`

function ProductDetail(data) {
    let ProductData = data.location.state.data;
    let AfterPrice = null;
    if(ProductData.DiscountRate != 0) {
      AfterPrice = ProductData.Price - (ProductData.Price / ProductData.DiscountRate);
    }
    console.log(ProductData.DiscountRate)
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
          <TextGrid item xs={5}>
            <Grid className="produnc_name">{ProductData.ProductName}</Grid>
            <Grid>{ProductData.ProductIntroduction}</Grid>
            <>
                {AfterPrice == null ? (
                <Grid className="c_red fwb fs_14">
                  <Grid>{ProductData.Price}円/税込</Grid>
                </Grid>
                ) : (
                <Grid className="c_red fwb fs_14 flex">
                  <del className="mr_20">{ProductData.Price}円/税込</del>
                  <Grid className="mr_20">→</Grid>
                  <Grid>{AfterPrice}円/税込</Grid>
                </Grid>
                )}                
            </>
          </TextGrid>
        </Grid>
        <Review />
        <ReadReview />
      </Box>
    )
}
export default ProductDetail;