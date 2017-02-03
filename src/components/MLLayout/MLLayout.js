import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: inline-block;

  font-family: 'Source Sans Pro',sans-serif;
  font-size: 15px;
  line-height: 33px;
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
  
  height: 34px;
  padding: ${props => props.icon ? '0 15px 0 12px' : '0 15px'};
  margin: 5px;
  
  background-color: ${props => props.primary ? Colors.aqua : 'transparent'}

  border: ${props => props.primary ? 'none' : '1px solid ' + Colors.aqua };
  border-radius: 3px;
  
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(0,117,142,1);
  }
`;
const Title = styled.span`
  line-height: 30px;
  margin-left: ${props => props.icon ? '8px' : '0'};
`;
const Icon = styled.span`
  position: relative;
  top: 4px;
  vertical-align: middle;
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
`;

// const SpecialLayout = styled.Layout`
// `

// const MLLayout = ({ title, btnClass, btnType, onClick, icon, style }) => {
class MLLayout extends Component {
  render() {
    const { onClick, icon, title, primary } = this.props;
    return (
      <Layout
        { ...this.props }
        onClick={ onClick } >
        { icon ?
          <Icon>
            <MLIcon title={ title } type={ icon } fill={ primary ? Colors.pure_white : Colors.aqua } />
          </Icon>
        : null}
        <Title { ...this.props }>{ title }</Title>
      </Layout>
    );
  }
}

MLLayout.defaultProps = {
  btnClass: 'default',
  btnType: ''
};

MLLayout.propTypes = {
  title: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnType: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  icon: PropTypes.string
};

export default MLLayout;
