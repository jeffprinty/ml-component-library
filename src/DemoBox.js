import React, { Component, PropTypes } from 'react';

import Highlight from 'react-highlight';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
`;
const Example = styled.div`
  flex-direction: row;
  flex: 1;
  align-self: flex-start;
`;

class DemoBox extends Component {
  render() {
    return (
      <Section>
        <Example>
          { this.props.children }
        </Example>
        <Example>
          <Highlight className='javascript'>
            { this.props.children }
          </Highlight>
        </Example>
      </Section>
    )
  }

}
export default DemoBox 