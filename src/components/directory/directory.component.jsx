import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import style from './directory.module.scss';
import { createStructuredSelector } from 'reselect';
// import data from '../../assests/data/directory.data.js';
import { connect } from 'react-redux';
import { selectDirecotrySections } from '../../redux/directory/directory.selectors.js';

const Directory = (props) => {
  console.log(props, 'here');
  return(
    <div className={style.directoryMenu}>
      {
        props.sections.map(({id, ...sectionProps}) => {
          return <MenuItem key={id} {...sectionProps}/>
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections
})

export default connect(mapStateToProps)(Directory);