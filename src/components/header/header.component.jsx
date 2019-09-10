import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js';

import style from './header.module.scss';

const Header = ({ currentUser }) => {
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
          <div className={style.option} onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className={style.option} to='/signin'></Link>
        }
      </div>
    </div>
  )
};

export default Header;