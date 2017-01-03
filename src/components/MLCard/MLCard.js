import React, { Component, PropTypes } from 'react';
import css from './mlCard.css';

import MLButton from '../MLButton/MLButton';

class MLCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
    const { title, content, button } = this.props;
    let that = this;
    return (
      <div className={ css["card"] }>
        <div className={ css["cardTitle"] + ' ' + css['divider'] }>
          <span className={ css['titleText'] }>{ title }</span>
          <span className={ css['headerButton' ]}>
            { button }
          </span>
        </div>
        <div className={ css['cardContent'] }>
          { content }
        </div>
      </div>
    )
  }

}

MLCard.defaultProps = {
  button: null
}

MLCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MLCard;