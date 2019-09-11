import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/data/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import style from './cart-icon.module.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div 
      className={style.cart_icon}
      onClick={toggleCartHidden}>
      <ShoppingIcon className={style.shopping_icon}/>
      <span className={style.item_count}>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);