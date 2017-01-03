import React, { Component, PropTypes } from 'react';
import css from './mlAccordionTitle.css';
import MLIcon from 'ml-react-cdl-icons';

class MLAccordionTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div style={ this.props.style } className={ css['box']} onClick={ this.props.onClick } >
        <MLIcon 
          iconType={ this.props.icon } 
          className={ css['icon'] }
          iconFill='#666'
          iconTitle='Edit Note' />
        <div className={ css['label']} >
          { title }
        </div>
      </div>
    )
  }

}

MLAccordionTitle.defaultProps = {
  style: {}
}

MLAccordionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MLAccordionTitle;