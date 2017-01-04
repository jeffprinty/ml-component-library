import React, { Component, PropTypes } from 'react';
import css from './mlAccordion.css';

import MLIcon from '../MLIcon/MLIcon';

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
    console.log('click',this.state);
  }
  _clickItem = (click) => {
    console.log(click);
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
        <div className={ css["cardTitle"] + ' ' + css['divider'] } onClick={ this._openDrawer } >
          <span className={ css['titleIcon'] }>
            { drawerOpen ?
              <MLIcon iconType='plus' iconTitle='Expand' />
              :
              <MLIcon iconType='minus' iconTitle='Collapse' />
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
  content: PropTypes.string.isRequired,
};

export default MLAccordion;