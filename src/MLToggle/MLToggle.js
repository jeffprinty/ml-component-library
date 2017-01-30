import React, { Component, PropTypes } from 'react';
import css from './mlToggle.css';

class MLToggle extends Component {
  clickCheckbox() {
    this.props.onChange( !this.state.checked );
    this.setState({
      checked: !this.state.checked
    });
  }


  render() {
    const { disabled, label } = this.props;
    return (
      <label className={ css['switch'] }>
        <input
          onChange={ this.clickCheckbox }
          type="checkbox"
          aria-label={ label }
          disabled={ disabled }
          checked={ this.state.checked } />
        <div className={ css['slider'] + ' ' + css['round'] } />
      </label>
    );
  }

}

MLToggle.defaultProps = {
  checked: false,
  disabled: false
};

MLToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

export default MLToggle;
