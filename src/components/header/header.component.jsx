import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';

import style from './header.module.scss';

const Header = ({ currentUser, hidden }) => {
  
  return (
    <div className={style.header}>
      <Link className={style.logo_container} to='/'>
        HOME
      </Link>
      <div className={style.options}>
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

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);