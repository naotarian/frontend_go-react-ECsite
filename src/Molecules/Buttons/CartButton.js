import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function CartButton() {
  return (
      <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
        カートに入れる
      </Button>
  );
}
export default CartButton;