import React, { Component, PropTypes } from 'react';

import MLButton from '../MLButton/MLButton';

import styled from 'styled-components';
import Colors from '../colors.js'

const Card = styled.div`
  height: auto;
  min-height: 160px; 
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;
const CardTitle = styled.div`
  padding: 18px 23px; 
  position: relative;
  display: flex;
  vertical-align: baseline;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 18px;  
`;
const TitleText = styled.div`
  flex: 3;
  font-weight: normal;
  font-size: 18px;
  color: #080808;
  padding: 0;
`;
const HeaderButton = styled.div`
    margin: -5px 0 -5px 5px;
    flex : 1;
    text-align: right;
  `;
const CardContent = styled.div`
    padding: 23px;
    padding-top: 0; 
    box-sizing: border-box;
    color: #383838;
`;

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
      <Card>
        <CardTitle>
          <TitleText>{ title }</TitleText>
          <HeaderButton>
            { button }
          </HeaderButton>
        </CardTitle>
        <CardContent>
          { content }
        </CardContent>
      </Card>
    )
  }

}

MLCard.defaultProps = {
  button: null
}

MLCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.element
};

export default MLCard;