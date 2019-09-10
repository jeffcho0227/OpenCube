import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <Link className={style.logo_container} to='/'>

      </Link>
      <div className={style.options}>
        <Link className={style.option} to='/shop'>
          SHOP
        </Link>
        <Link className={style.option} to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  )
};

export default Header;