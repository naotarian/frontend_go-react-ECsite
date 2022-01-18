import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios';
import TestImage from "../images/product1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from '@mui/material/Typography';
import "../css/common.css";
import "swiper/css";
import "swiper/css/navigation"
import TotalPrice from "../Parts/TotalPrice";
import SwiperCore, {
  Navigation
} from 'swiper';
SwiperCore.use([Navigation]);

function CartDetailPage(data) {
    const [item, setItem] = useState(data.location.state.data);
    let price = 0;
    Object.values(item).map((dataItem, index) => {
        price += dataItem.value;
    })
    const {
        addItem,
        cartDetails,
        incrementItem, decrementItem, removeItem,
    } = useShoppingCart()
    //styled
    const CartDetailCard = styled(Card)`
      padding: 1rem;
      text-align: left;
      margin-bottom: 1rem;
      margin: 1rem auto;
      width: 80%;
　　　@media (max-width: 768px) {
　　　  width: 95%;
      }
      
    `
    const ImageGrid = styled(Grid)`
      width: 100%;
      border: 2px solid gray;
      border-radius: 10px;
      text-align: center;
      margin: 0 auto;
    `
    const ItemGrid = styled(Grid)`
      text-align: center;
    `
    const TextGrid = styled(Grid)`
      text-align: left;
      padding: 1rem;
    `
    const FlexGrid = styled(Grid)`
      display: flex;
      @media (max-width: 768px) {
　　　  display: block;
      }
    `
    const WrapperGrid = styled(Grid)`
      display: block;
    `
    //endstyled
    return (
        <WrapperGrid>
            <Typography>カート内容</Typography>
        <FlexGrid>
            <Grid className="mx100">
            {Object.values(item).map((product, index) => {
                return(
                    <CartDetailCard key={index}>
                        <Grid container spacing={4} columns={{ xs: 12, sm: 6, md: 12 }}>
                            <ItemGrid item xs={12} sm={1} md={5}>
                                <ImageGrid>
                                  <Swiper navigation={true} className="mySwiper">
                                    <SwiperSlide>
                                      <img src={TestImage} alt="アイコン" className="mw_100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                      <img src={TestImage} alt="アイコン" className="mw_100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                      <img src={TestImage} alt="アイコン" className="mw_100" />
                                    </SwiperSlide>
                                  </Swiper>
                                </ImageGrid>
                            </ItemGrid>
                            <TextGrid item xs={12} sm={1} md={7}>
                                <Grid className="produnc_name">{product.ProductName}</Grid>
                                <Grid>{product.ProductIntroduction}</Grid>
                                <>
                                    {product.DiscountRate == 0 ? (
                                    <Grid className="c_red fwb fs_14">
                                      <Grid>{product.Price.toLocaleString()}円/税込</Grid>
                                    </Grid>
                                    ) : (
                                    <Grid className="c_red fwb fs_14 flex tar">
                                      <del className="mr_20">{product.Price}円/税込</del>
                                      <Grid className="mr_20">→</Grid>
                                      <Grid>{product.price.toLocaleString()}円/税込</Grid>
                                    </Grid>
                                    )}                
                                </>
                            </TextGrid>
                        </Grid>
                    </CartDetailCard>
                ) 
            })}
                    </Grid>
            <TotalPrice data={price} />
        </FlexGrid>    
        </WrapperGrid>
    )
} export default CartDetailPage;