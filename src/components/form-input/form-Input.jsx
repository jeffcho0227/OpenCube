import React from 'react';
import style from './form-input.module.scss';

const FormInput = ({handleInputChange, label, ...otherProps }) => {
  let attachInputStyle = [style.form_input_label]
  if (otherProps.value.length) {
    attachInputStyle = [style.form_input_label, style.shrink].join(' ');
  }
  return (
    <div className={style.group}>
      <input className={style.form_input} onChange={handleInputChange} {...otherProps}/>
      {
        label ?
        (
        <label 
          className={attachInputStyle}>
            {label}
        </label>
        ) :
        null 
      }
    </div>
  )
}

export default FormInput;