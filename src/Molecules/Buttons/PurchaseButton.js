import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function PurchaseButton(data) {
  const itemConfirm = {
    pathname: '/item_confirm',
    search: '',
    hash: '',
    state: { data: data }
  };
  return (
    /*
      <Button variant="outlined" className="mr_20" onClick={() => this.props.snsPost()} startIcon={<ArrowRightAltIcon />}>
      */
      <Button variant="outlined" className="mr_20" component={Link} to={itemConfirm} startIcon={<ArrowRightAltIcon />}>
        今すぐ購入
      </Button>
  );
}
export default PurchaseButton;