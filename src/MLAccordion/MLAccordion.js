import React, { Component, PropTypes } from 'react';
import css from './mlAccordion.css';

import MLIcon from 'ml-react-cdl-icons';

class MLAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  _openDrawer = (e) => {
    this.setState({ 
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={ css["card"] }>
        <div 
          role='tab' 
          tabIndex='0'
          aria-expanded={ isOpen }
          className={ css["cardTitle"] + ' ' + css['divider'] } 
          onKeyDown={ this._openDrawer } 
          onClick={ this._openDrawer } >
          <span className={ css['titleIcon'] }>
            { isOpen ?
              <MLIcon type='minus' title='Collapse' fill='#666666' />
              :
              <MLIcon type='plus' title='Expand' fill='#666666' />
            }
          </span>
          <span className={ css['titleText'] }>{ title }</span>
        </div>
        <div style={{ display: isOpen ? 'block' : 'none' }} className={ css['content'] }>
          { content }
        </div>
      </div>
    )
  }

}

MLAccordion.defaultProps = {
  button: null
}

MLAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default MLAccordion;