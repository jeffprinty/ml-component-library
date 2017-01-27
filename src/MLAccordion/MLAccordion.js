import React, { Component, PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
import Colors from '../colors.js'

import styled from 'styled-components';

const Accordion = styled.div`
  height: auto;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;
const AccordionTitle = styled.div`
  padding: 18px 23px; 
  position: relative;
  display: flex;
  vertical-align: baseline;
  cursor: pointer;

  user-select: none;

  border-bottom: 1px solid #dddddd;
  margin-bottom: 18px;  
`;
const AccordionIcon = styled.span`

`;
const TitleText = styled.span`
  line-height: 22px;
  margin-left: 8px;
`;
const AccordionContent = styled.div`
    padding: 23px;
    padding-top: 0; 
    box-sizing: border-box;
    color: #383838;
    word-wrap: break-word;
`;
class MLAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  _openDrawer = (e) => {
    if (!!e.key && e.key !== 'Enter') {
      return false
    }
    this.setState({ 
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <Accordion>
        <AccordionTitle 
          role='tab' 
          tabIndex='0'
          aria-expanded={ isOpen }
          onKeyDown={ this._openDrawer } 
          onClick={ this._openDrawer } >
          <AccordionIcon>
            { isOpen ?
              <MLIcon type='minus' title='Collapse' fill='#666666' />
              :
              <MLIcon type='plus' title='Expand' fill='#666666' />
            }
          </AccordionIcon>
          <TitleText>{ title }</TitleText>
        </AccordionTitle>
        <AccordionContent style={{ display: isOpen ? 'block' : 'none' }}>
          { children }
        </AccordionContent>
      </Accordion>
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