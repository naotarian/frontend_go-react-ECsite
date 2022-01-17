import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart'
import Grid from '@mui/material/Grid';

function CartButton(data) {
  data.data.price_id = `price_${data.data.ID}`;
  data.data.price = data.data.Price;
  const {
      addItem,
      cartDetails,
  　　incrementItem, decrementItem, removeItem,redirectToCheckout,
  } = useShoppingCart()
  return (
      <Button variant="contained" onClick={() => addItem(data.data)} startIcon={<AddShoppingCartIcon />}>
        カートに入れる
      </Button>
  );
}
export default CartButton;