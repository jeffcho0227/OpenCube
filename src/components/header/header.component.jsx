import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js'
import { selectCurrentUser } from '../../redux/user/user.selectors.js';

import style from './header.module.scss';

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser, 'header');
  let displayName = null;
  if (currentUser) {
    displayName = currentUser.displayName.split(' ');
  }

  return (
    <div className={style.header}>
      <Link className={style.logo_container} to='/'>
        HOME
      </Link>
      <div className={style.options}>
        {
          currentUser ? 
          ( 
            <div className={style.displayName}>Welcome {displayName[displayName.length-1]}</div>
          )
          : null
        }
        <Link className={style.option} to='/shop'>
          SHOP
        </Link>
        <Link className={style.option} to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ? 
          (<div className={style.option} onClick={() => auth.signOut()}>SIGN OUT</div>)
          :
          (<Link className={style.option} to='/signin'>SIGN IN</Link>)
        }
        <CartIcon />
      </div>

      {
        hidden ? null : <CartDropDown />
      }

    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);