import React from 'react';

import style from './cart-item.module.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <div className={style.cart_item}>
      <img src={imageUrl} alt='item'/>
      <div className={style.item_details}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
};

export default CartItem;