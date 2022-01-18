import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import DeleteSweepSharpIcon from '@mui/icons-material/DeleteSweepSharp';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../css/common.css';
function CartDetail(data) {
  useEffect(() => {
    console.log(cartDetails)
  }, [])
  const {
      addItem,
      cartDetails,
      incrementItem, decrementItem, removeItem,
  } = useShoppingCart()
  const FlatteryTitle = styled(Grid)`
    padding: 1rem;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    height: 40px;
  `
  const CartDetailPage = {
    pathname: '/cart_detail',
    search: '',
    hash: '',
    state: { data: cartDetails }
  };
  
  
  return(
    <ul className="p0">
      {Object.entries(cartDetails).map(([priceId, cartItem]) => (
        <li key={`cart-${priceId}`}>
          <Link to={CartDetailPage}>カートを見る</Link>
          <FlatteryTitle>{data.data.data.ProductName}</FlatteryTitle>
          {/*
          {cartItem.name} ({cartItem.formattedPrice} * {cartItem.quantity} = {cartItem.formattedValue})<br/>
          */}
          <Typography>数量 : {cartItem.quantity}個</Typography>
          <Button variant="contained" onClick={() => incrementItem(priceId)} startIcon={<AddShoppingCartIcon />} color="success"></Button>
          <Button variant="contained" onClick={() => decrementItem(priceId)} startIcon={<RemoveCircleSharpIcon />} color="primary"></Button>
          <Button variant="contained" onClick={() => removeItem(priceId)} startIcon={<DeleteSweepSharpIcon />} color="error"></Button>
        </li>
      ))}
    </ul>
  )
} export default CartDetail;