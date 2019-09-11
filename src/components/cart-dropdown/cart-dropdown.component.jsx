import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import style from './cart-dropdown.module.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className={style.cart_dropdown}>
      <div className={style.cart_item}>
        {
          cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
        }
      </div>
        <Button>CHECKOUT</Button>
    </div>
  )
};

const mapStateToProps = ({ cart: {cartItems}})=> ({
  cartItems
});

export default connect(mapStateToProps)(CartDropDown);