import React from 'react';
import style from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity}}) => {
  return (
    <div className={style.checkout_item}>
      <div className={style.image_container}>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className={style.name}>{name}</span>
      <span className={style.quantity}>{quantity}</span>
      <span className={style.price}>{price}</span>
      <div className={style.remove_button}>&#10005</div>
    </div>
  )
};

export default CheckoutItem;