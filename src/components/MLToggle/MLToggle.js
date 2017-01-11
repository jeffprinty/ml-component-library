import React, { Component, PropTypes } from 'react';
import css from './mlToggle.css';

class MLToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  _openMenu = () => {
    this.setState({ 
      menuOpen: !this.state.menuOpen
    })
    console.log('click',this.state);
  }
  clickCheckbox = (click) => {
    this.props.onChange( !this.state.checked )
    this.setState({
      checked: !this.state.checked
    })
  }


  render() {
    const { onChange, disabled } = this.props;
    let that = this;
    return (
      <label className={ css["switch"] }>
        <input onChange={ this.clickCheckbox } type="checkbox" disabled={ disabled } checked={ this.state.checked } />
        <div className={ css["slider"] + ' ' + css["round"] }></div>
      </label>
    )
  }

}

MLToggle.defaultProps = {
  checked: false,
  disabled: false
}

MLToggle.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default MLToggle;