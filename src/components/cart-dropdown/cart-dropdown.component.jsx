import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../UI/Button/Button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import style from './cart-dropdown.module.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  console.log(toggleCartHidden, 'test');
  return (
    <div className={style.cart_dropdown}>
      <div className={style.cart_items}>
        {
          cartItems.length ? 
          ( cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))) 
          : ( <span className={style.empty_message}>Cart is empty</span> )
        }
      </div>
        <Button onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
          }}>CHECKOUT</Button>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));