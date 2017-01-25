import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss'

const styles = {
  card: {
    height: 'auto',
    width: '100%',
    background: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
  },
cardTitle: {
  padding: '18px 23px', 
  position: 'relative',
  display: 'flex',
  verticalAlign: 'baseline',
  cursor: 'pointer'
},
titleText: {
  flex: 3,
  fontWeight: 'normal',
  fontSize: '18px',
  color: '#080808',
  padding: 0,
  marginLeft: '8px'
},

divider: {
    borderBottom: '1px solid #dddddd',
    marginBottom: '18px'
  },
  
headerButton: {
    margin: '-5px 0 -5px 5px',
    flex : 1,
    textAlign: 'right'
  },
  
content: {
    padding: 23,
    paddingTop: 0, 
    boxSizing: 'border-box',
    color: '#383838',
    wordWrap: 'break-word'
  }
  
};

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
      <div style={ styles["card"] }>
        <div 
          role='tab' 
          tabIndex='0'
          aria-expanded={ isOpen }
          style={ styles['cardTitle'], styles['divider'] } 
          onKeyDown={ this._openDrawer } 
          onClick={ this._openDrawer } >
          <span style={ styles['titleIcon'] }>
            { isOpen ?
              <MLIcon type='minus' title='Collapse' fill='#666666' />
              :
              <MLIcon type='plus' title='Expand' fill='#666666' />
            }
          </span>
          <span style={ styles['titleText'] }>{ title }</span>
        </div>
        <div style={{ display: isOpen ? 'block' : 'none', ...styles['content'] }} >
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