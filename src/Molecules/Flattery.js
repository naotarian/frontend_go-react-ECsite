import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartDetail from './CartDetail';
import styled from 'styled-components';
const FloatingBtn = (data) => {
const FlatteryCard = styled(Card)`
  padding: 1rem;
  text-align: center;
  margin: 0;
  bottom: 100px;
  right: 0;
  bottom: 20;
  position: fixed;
  max-width: 200px;
  `
  return (
    <FlatteryCard variant="outlined">
      <CartDetail data={data} />
    </FlatteryCard>
  )
};
export default FloatingBtn;