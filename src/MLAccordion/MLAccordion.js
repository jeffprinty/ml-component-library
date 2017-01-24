import React, { Component, PropTypes } from 'react';
import css from './mlAccordion.css';

import MLIcon from 'ml-react-cdl-icons';

class MLAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  _openDrawer = (e) => {
    this.setState({ 
      drawerOpen: !this.state.drawerOpen
    })
  }
  _clickItem = (click) => {
    this.props.itemClicked(click);
    this.setState({
      menuTitle: click,
      drawerOpen: false,
    })
  }

  render() {
    const { title, content } = this.props;
    const { drawerOpen } = this.state;
    return (
      <div className={ css["card"] }>
        <div 
          role='tab' 
          tabIndex='0'
          aria-expanded={ drawerOpen }
          className={ css["cardTitle"] + ' ' + css['divider'] } 
          onKeyDown={ this._openDrawer } 
          onClick={ this._openDrawer } >
          <span className={ css['titleIcon'] }>
            { drawerOpen ?
              <MLIcon iconType='minus' iconTitle='Collapse' iconFill='#666666' />
              :
              <MLIcon iconType='plus' iconTitle='Expand' iconFill='#666666' />
            }
          </span>
          <span className={ css['titleText'] }>{ title }</span>
        </div>
        <div style={{ display: drawerOpen ? 'block' : 'none' }} className={ css['content'] }>
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
};

export default MLAccordion;