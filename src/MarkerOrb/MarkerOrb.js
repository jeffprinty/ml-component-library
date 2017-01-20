import React, { Component, PropTypes } from 'react';
//import css from './MarkerOrb.css';

class MarkerOrb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
  }
  clickEvent = (globalId) => {
    this.props.clickFunc(globalId)
  }
  _handleMouseEnter = () => {
    this.setState({
      hovering: true
    })
  }
  _handleMouseLeave = () => {
    this.setState({
      hovering: false
    })
  }
  render() {
    const { a11yTitle, isSelected, markerColor, circleColor, globalId, className, noX, hoverChange, style } = this.props;
    let clickEvent = this.clickEvent.bind(this, globalId);
    if ( isSelected == true || this.state.hovering === true ) {
      if ( noX === true ) {
        return (
          <div onMouseEnter={ this._handleMouseEnter } onMouseLeave={ this._handleMouseLeave } className={ className } style={ style }>
            <svg onClick={ clickEvent } fill={ markerColor } height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <title>{ a11yTitle }</title>
              <circle cx="11.786" cy="12.095" r="10.328" style={{ fill: 'none', stroke: circleColor, strokeWidth: '1.47px' }}/>
              <circle cx="12" cy="11.951" r="8.366"/>
            </svg>
          </div>
        )
      } else {
        return (
          <div onMouseEnter={ this._handleMouseEnter } onMouseLeave={ this._handleMouseLeave } className={ className } style={ style }>
            <svg onClick={ clickEvent } fill={ markerColor } height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <title>{ a11yTitle }</title>
              <circle id={ globalId } cx="11.786" cy="12.095" r="10.328" style={{ fill: 'none', stroke: circleColor, strokeWidth: '1.47px' }}/>
              <path d="M12,20.317c-4.617,0 -8.366,-3.748 -8.366,-8.366c0,-4.617 3.749,-8.365 8.366,-8.365c4.617,0 8.366,3.748 8.366,8.365c0,4.618 -3.749,8.366 -8.366,8.366Zm5.282,-12.113l-2,-1.695l-3.379,3.927l-3.78,-4.183l-1.797,1.779l4.145,3.75l-4.099,3.554l2.025,2.083l3.506,-4.062l3.754,4.056l1.941,-1.839l-4.043,-3.848l3.727,-3.522Z"/>
            </svg>
          </div>
        )
        
      }
    } else {
      return (
        <div onMouseEnter={ this._handleMouseEnter } onMouseLeave={ this._handleMouseLeave } className={ className } style={ style }>
          <svg onClick={ clickEvent } fill={ markerColor } height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <title>{ a11yTitle }</title>
            <circle id={ globalId } cx="12" cy="11.951" r="8.366"/>
          </svg>
        </div>
      )
      
    }
  }

}

MarkerOrb.defaultProps = {
  noX: false,
  circleColor: "#ffffff"
}

MarkerOrb.propTypes = {
  clickFunc: PropTypes.func,
  isSelected: PropTypes.bool,
  markerColor: PropTypes.string,
  globalId: PropTypes.string,
  className: PropTypes.string,
  noX: PropTypes.bool
};

export default MarkerOrb;