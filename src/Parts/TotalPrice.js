import * as React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
const TotalPrice = (price) => {
    const giveComma = (price) => {
        return price.toLocaleString();
    }
    const CartDetailCard = styled(Card)`
      padding: 1rem;
      text-align: left;
      margin-bottom: 1rem;
      width: 30%;
      @media (max-width: 768px) {
　　　  width: 95%;
      }
    `
  return (
    <CartDetailCard>合計金額 : {giveComma((price.data))}円</CartDetailCard>
  )
};
export default TotalPrice;