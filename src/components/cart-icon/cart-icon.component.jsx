import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/data/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';
import style from './cart-icon.module.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div 
      className={style.cart_icon}
      onClick={toggleCartHidden}>
      <ShoppingIcon className={style.shopping_icon}/>
      <span className={style.item_count}>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);