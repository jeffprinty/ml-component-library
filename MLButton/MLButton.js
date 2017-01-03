import React, { Component, PropTypes } from 'react';
import css from './mlButton.css';

class MLButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, flavor, clickFunc } = this.props;
    return (
        <button className={ css['button'] } onClick={ clickFunc } >{ text }</button>
    )
  }

}

MLButton.defaultProps = {

}

MLButton.propTypes = {
  text: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  clickFunc: PropTypes.func,
  
};

export default MLButton;