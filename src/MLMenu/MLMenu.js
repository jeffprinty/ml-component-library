import React, { Component, PropTypes } from 'react';

import styled from 'styled-components';

const Dropdown = styled.div`
  display: inline-block;
  position: relative; 
`;
const DropdownTitle = styled.div`
  height: 34px;
  line-height: 34px;
  color: ${ props => (props.isOpen ? '#080808' : '#00758E') };
  padding-right: 14px;
  text-align: right;

  &:hover {
    cursor: pointer;
    color: #080808;
  }
`;
const Chevron = styled.span`
  fill: #00758E;
  &:hover {
    fill: #080808;  
  }
`;
const DropdownClosed = styled.ul`
  display: block;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: -15px;
  width: 200px;
  background: #f8f8f8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  z-index: 500;
  font-size: 15px;
  
  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
`;
const DropdownOpen = styled.ul`
  position: absolute;
  top: 0px;
  width: 200px;
  background: #f8f8f8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  opacity: 0;
  z-index: 500;
  font-size: 15px;
  
  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);
  display: block;
  visibility: 'visible';
  opacity: 1 !important;
  top: -5px !important;
  display: block !important;
`;
const DropdownItem = styled.li`

  display: block;
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  box-sizing: border-box; 

  color: #00758E; 
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background: #eeeeee;
    text-decoration: none;
    color: #080808; 
  }
`;

class MLMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      isOpen: false
    };
  }

  _openMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  _clickItem = click => {
    console.log(click);
    this.props.itemSelected(click);
    this.setState({
      title: click,
      isOpen: false
    });
  }

  render() {
    const { title, isOpen } = this.state;
    const { itemArray } = this.props;

    const DrawerDiv = isOpen ? DropdownOpen : DropdownClosed;

    return (
      <Dropdown>
        <DropdownTitle role="tab" onClick={ this._openMenu }>
          { title }
          <Chevron>
            <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g>
                <polygon points="0 0 4 5.19614188 8 0" />
              </g>
            </svg>
          </Chevron>
        </DropdownTitle>
        <DrawerDiv>
          {
            itemArray.map((itemName) => {
              let clickItem = this._clickItem.bind(this, itemName);
              return (
                <DropdownItem
                  onClick={ clickItem }
                  tabIndex="0"
                  role="button"
                  key={ itemName }>
                  { itemName }
                </DropdownItem>
              );
            })
          }
        </DrawerDiv>
      </Dropdown>
    );
  }

}

MLMenu.defaultProps = {
  itemArray: []
};

MLMenu.propTypes = {
  title: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired,
  itemSelected: PropTypes.func.isRequired
};

export default MLMenu;
