import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import StripeCheckoutButton from '../../components/strip-button/strip-button.component.jsx';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';

import style from './checkout.module.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className={style.checkout_page}>
      <div className={style.checkout_header}>
        <div className={style.header_block}>
          <span>Product</span>
        </div>
        <div className={style.header_block}>
          <span>Description</span>
        </div>
        <div className={style.header_block}>
          <span>Quantity</span>
        </div>
        <div className={style.header_block}>
          <span>Price</span>
        </div>
        <div className={style.header_block}>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )
      }
      <div className={style.total}>
        <span>TOTAL: ${ total }</span>
      </div>
      <div className={style.test_warning}>
        ** please use the following test credit card for payments**
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 -CVV: 123
      </div>
      
      <StripeCheckoutButton price={total}/>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, 
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);

