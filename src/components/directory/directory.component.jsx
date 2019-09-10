import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import style from './directory.module.scss';
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
        {
          this.state.sections.map((item, idx) => {
            return <MenuItem item={item} key={idx}/>
          })
        }
      </div>
    )
  }
}

export default Directory;