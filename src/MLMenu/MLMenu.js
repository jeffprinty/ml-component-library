import React, { Component, PropTypes } from 'react';
import css from './mlMenu.css';


class MLMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTitle: props.menuTitle,
      menuOpen: false
    }
  }

  _openMenu = () => {
    this.setState({ 
      menuOpen: !this.state.menuOpen
    })
    console.log('click',this.state);
  }
  _clickItem = (click) => {
    console.log(click);
    this.props.itemClicked(click);
    this.setState({
      menuTitle: click,
      menuOpen: false,
    })
  }

  render() {
    const { menuTitle, menuOpen } = this.state;
    const { menuArray } = this.props;
    let that = this;
    return (
      <div className={ css["dropdown"] }>
        <div className={ css["dropdownTitle"] } onClick={ this._openMenu }>
          { menuTitle } 
          <span className={ css['chevron'] }>
            <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g>
                <polygon points="0 0 4 5.19614188 8 0"></polygon>
              </g>
            </svg>
          </span>
        </div>
        <ul className={ !menuOpen ? css['dropdownContent'] : css['dropdownOpen'] } style={{ left: '-15px' }}>
          { 
            menuArray.map(function(itemName, i){
              let clickItem = that._clickItem.bind(that, itemName)
              return <li onClick={clickItem} className={ css['dropdownItem'] } key={ itemName }><a href="#">{ itemName }</a></li>
            }) 
          }
        </ul>
      </div>
    )
  }

}

MLMenu.defaultProps = {
  menuArray: []
}

MLMenu.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  menuArray: PropTypes.array.isRequired,
  itemClicked: PropTypes.func.isRequired,
};

export default MLMenu;