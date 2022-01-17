import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios';

function CartDetailPage(data) {
    console.log(data)
    const [item, setItem] = useState([]);
    const {
        addItem,
        cartDetails,
        incrementItem, decrementItem, removeItem,
    } = useShoppingCart()
    
    const GetItem = (id) => {
        let url = `http://${window.location.hostname}:8080/api/get_item`;
        axios.post(url, {
            id: id,
        })
        .then(function (response) {
        console.log(response.data);
        setItem(response.data.message)
        })
    }
    //styled
    const CartDetailCard = styled(Card)`
      padding: 1rem;
      text-align: left;
    `
    //endstyled
    return (
        <Grid>
            カート内容
            {Object.entries(cartDetails).map(([priceId, cartItem]) => (
            /*
            <CartDetailCard>{GetItem(cartItem.ID)}</CartDetailCard>
            */
            <CartDetailCard>test</CartDetailCard>
            
            /*
            <li key={`cart-${priceId}`}>
              <a href="/cart_detail">カートを見る</a>
              <FlatteryTitle>{data.data.data.ProductName}</FlatteryTitle>
              
              {cartItem.name} ({cartItem.formattedPrice} * {cartItem.quantity} = {cartItem.formattedValue})<br/>
              
              <Typography>数量 : {cartItem.quantity}個</Typography>
              <Button variant="contained" onClick={() => incrementItem(priceId)} startIcon={<AddShoppingCartIcon />} color="success"></Button>
              <Button variant="contained" onClick={() => decrementItem(priceId)} startIcon={<RemoveCircleSharpIcon />} color="primary"></Button>
              <Button variant="contained" onClick={() => removeItem(priceId)} startIcon={<DeleteSweepSharpIcon />} color="error"></Button>
            </li>
            */
          ))}
        </Grid>    
    )
} export default CartDetailPage;