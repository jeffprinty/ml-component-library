import React, { Component, PropTypes } from 'react';
import css from './mlButton.css';
import MLIcon from '../MLIcon/MLIcon';

class MLButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, btnClass, secondary, clickFunc, icon } = this.props;

    return (
      <button className={ css['button'] + ' ' + css[ btnClass ] + ' ' + css[ secondary ] } onClick={ clickFunc } >{ icon }{ title }</button>
    )
  }

}

MLButton.defaultProps = {
  btnClass: 'default',
  secondary: ''
}

MLButton.propTypes = {
  title: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  secondary: PropTypes.string,
  clickFunc: PropTypes.func,
  
};

export default MLButton;