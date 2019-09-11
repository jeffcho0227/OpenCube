import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { stripePublishableKey } from '../../config/config.js';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = token => {
    console.log(token);
    alert('payment successful')
  }

  return (
      <StripeCheckout 
        label='Pay Now'
        name='Open Cube'
        billingAddress
        shippingAddress
        alipay
        description={`your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={stripePublishableKey}
      />
  )
};

export default StripeCheckoutButton;

