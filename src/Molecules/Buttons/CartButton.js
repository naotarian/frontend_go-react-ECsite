import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart'

function CartButton(data) {
  data.data.price_id = `price_${data.data.ID}`;
  if(data.data.DiscountRate != 0) {
    data.data.price = data.data.Price - data.data.Price / data.data.DiscountRate;
  } else {
    data.data.price = data.data.Price;
  }
  const {
      addItem,
  } = useShoppingCart()
  return (
      <Button variant="contained" onClick={() => addItem(data.data)} startIcon={<AddShoppingCartIcon />}>
        カートに入れる
      </Button>
  );
}
export default CartButton;