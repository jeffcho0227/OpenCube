import React from 'react';
import Directory from '../../components/directory/directory.component.jsx';
import style from './homepage.module.scss';

const Homepage = () => (
  <div className={style.homepage}>
    <Directory />
  </div>
)

export default Homepage;