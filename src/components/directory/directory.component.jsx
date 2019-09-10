import React from 'react';
import style from './directory.styles.scss';
import data from '../../assests/data/directory.data.js';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: data
    }
  }

  render() {
    return(
      <div className={style.directoryMenu}>

      </div>
    )
  }
}

export default Directory;