import React from 'react';
import style from './checkout-item.module.scss';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={style.checkout_item}>
      <div className={style.image_container}>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className={style.name}>{name}</span>
      <span className={style.quantity}>
        <div className={style.arrow} onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className={style.value}>{quantity}</span>
        <div className={style.arrow} onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className={style.price}>{price}</span>
      <div onClick={() => clearItem(cartItem)} className={style.remove_button}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)), 
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);