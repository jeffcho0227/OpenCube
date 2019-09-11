import React from 'react';

import Button from '../UI/Button/Button.component.jsx';

import style from './cart-dropdown.module.scss';

const CartDropDown = () => {
  return (
    <div className={style.cart_dropdown}>
      <div className={style.cart_item}>
      </div>
        <Button>CHECKOUT</Button>
    </div>
  )
};

export default CartDropDown;