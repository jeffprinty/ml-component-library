import React, { Component, PropTypes } from 'react';
import css from './mlButton.css';


const MLButton = ({ title, btnClass, btnType, onClick, icon, style }) => {
  return (
    <button 
      className={ `${css['button']} ${css[ btnClass ]} ${css[ btnType ]}` } 
      style={ style } 
      onClick={ onClick } >{ icon }{ title }</button>
  );
}

MLButton.defaultProps = {
  btnClass: 'default',
  btnType: ''
}

MLButton.propTypes = {
  title: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnType: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  
};

export default MLButton;