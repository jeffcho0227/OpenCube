import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import style from './header.module.scss';

const Header = props => {
  console.log(props);
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
          props.currentUser ? 
          <div className={style.option} onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className={style.option} to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);