import React, { Component, PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
import css from './sidebarChecklist.css';

class SidebarChecklist extends Component {
  constructor(props) {
    super(props);
  }

  _clicked = ( item ) => {
    let _selectedItems = this.props.optionsData;
    if ( typeof _selectedItems[ item ] == 'undefined' ) {
      _selectedItems[ item ] = false;
    } else {
      _selectedItems[ item ] = !_selectedItems[ item ];
    }
    this.props.cb( _selectedItems );
  }
  render() {
    let { optionsArray, title } = this.props;
    let that = this;
    return (
      <div className={ css['listWrap'] }>
        <div className={ css['sidebarTitle'] }>{ title }</div>
        <div className={ css['optionsWrap'] }>
          {
            optionsArray.map(function( item ){
              let isUnchecked = that.props.optionsData[ item ] === false;
              let _clicked = that._clicked.bind(this, item);
              return (
                <div key={ item } onClick={ _clicked } className={ css['listItem'] }>
                  <span className={ css['label'] } >{ item }</span>
                  <span className={ css['check'] }>
                    <MLIcon 
                      className={ css['filterCheck'] } 
                      iconType={  isUnchecked ? 'none' : 'check' } 
                      iconFill={ '#69AA32' }
                      iconTitle='check' />
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

SidebarChecklist.defaultProps = {
  optionsArray: [],
  optionsData: {}
}
SidebarChecklist.propTypes = {
  optionsArray: PropTypes.array,
  optionsData: PropTypes.object,
  title: PropTypes.string,
};
export default SidebarChecklist;