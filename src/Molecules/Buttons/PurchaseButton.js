import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function PurchaseButton() {
  return (
      <Button variant="outlined" className="mr_20" startIcon={<ArrowRightAltIcon />}>
        今すぐ購入
      </Button>
  );
}
export default PurchaseButton;