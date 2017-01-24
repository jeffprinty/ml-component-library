import React, { Component, PropTypes } from 'react';
import css from './mlAlert.css';

import MLIcon from '../MLIcon/MLIcon';

class MLAlert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, alertType, icon, style } = this.props;
    return (
      <div style={style}>
        <MLIcon type={ icon } title={ alertType } fill='#666666' />

        { text }
      </div>
    )
  }

}

MLAlert.defaultProps = {

}

MLAlert.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
};

export default MLAlert;