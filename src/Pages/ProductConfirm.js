import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import TestImage from "../images/product1.jpg";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Review from '../Parts/Review';
import ReadReview from '../Parts/ReadReview';
import CartButton from '../Molecules/Buttons/CartButton'
import PurchaseButton from '../Molecules/Buttons/PurchaseButton'
import ItemConfirmTable from '../Parts/ItemConfirmTable'
import "../css/common.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
  Navigation
} from 'swiper';
SwiperCore.use([Navigation]);

const PageTitle = styled(Typography)`
    font-size: 2rem!important;
    font-weight: bold!important;
    color: red;
    border-bottom: 2px solid red;
`
const ImageGrid = styled(Grid)`
  width: 50%;
  border-radius: 10px;
  text-align: center;
`
const FlexGrid = styled(Grid)`
  display: flex;
  padding: 1rem;
`

function ProductConfirm(data) {
    console.log(data.location.state.data.data)
    return(
        <Grid>
            <PageTitle>
                商品確認画面
            </PageTitle>
            <FlexGrid>
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
              <ItemConfirmTable />
            </FlexGrid>
        </Grid>
    );
}
export default ProductConfirm;