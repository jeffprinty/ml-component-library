import React, { Component, PropTypes } from 'react';
import css from './mlMenu.css';


class MLMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      isOpen: false
    }
  }

  _openMenu = () => {
    this.setState({ 
      isOpen: !this.state.isOpen
    })
    console.log('click',this.state);
  }
  _clickItem = (click) => {
    console.log(click);
    this.props.itemClicked(click);
    this.setState({
      title: click,
      isOpen: false,
    })
  }

  render() {
    const { title, isOpen } = this.state;
    const { itemArray } = this.props;
    let that = this;
    return (
      <div className={ css["dropdown"] }>
        <div className={ css["dropdownTitle"] } role='tab' onClick={ this._openMenu }>
          { title } 
          <span className={ css['chevron'] }>
            <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g>
                <polygon points="0 0 4 5.19614188 8 0"></polygon>
              </g>
            </svg>
          </span>
        </div>
        <ul className={ !isOpen ? css['dropdownContent'] : css['dropdownOpen'] } style={{ left: '-15px' }}>
          { 
            itemArray.map(function(itemName, i){
              let clickItem = that._clickItem.bind(that, itemName)
              return (
                <li 
                  onClick={clickItem} 
                  tabIndex='0'
                  role='button'
                  className={ css['dropdownItem'] } 
                  key={ itemName }>
                  <a href="#">{ itemName }</a>
                </li>
              )
            }) 
          }
        </ul>
      </div>
    )
  }

}

MLMenu.defaultProps = {
  itemArray: []
}

MLMenu.propTypes = {
  title: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired,
  itemClicked: PropTypes.func.isRequired,
};

export default MLMenu;