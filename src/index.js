import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'use-shopping-cart'

ReactDOM.render(
  <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe="ここはAPIキー"
    successUrl="http://3.145.188.41:3000"
    cancelUrl="http://3.145.188.41:3000"
    currency="JPY"
    allowedCountries={['US', 'GB', 'JP']}
    billingAddressCollection={true}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
