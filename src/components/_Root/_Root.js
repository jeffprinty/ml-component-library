import React, { Component } from 'react';
import { MLIcon, MLMenu, MLCard, MLToggle, MLButton, MLAccordion, MLAccordionList } from '../index';
import MarkerOrb from '../MarkerOrb/MarkerOrb';

import '../../assets/styles/fonts.css';

import Colors from '../colors.js';

import css from './_root.css';
//require("style-loader!css-loader!../../assets/styles/demoEditor.css");
// import '../../assets/styles/demoEditor.css';
// import '../../assets/styles/resets.css';

import styled from 'styled-components';

import Playground from '../Playground';
import ReactDOM from 'react-dom';

import MLButtonUsage from '../MLButton/MLButton.md';
import MLToggleUsage from '../MLToggle/MLToggle.md';
import MLMenuUsage from '../MLMenu/MLMenu.md';
import MLIconUsage from '../MLIcon/MLIcon.md';
import MLAccordionUsage from '../MLAccordion/MLAccordion.md';

import { Grid, Row, Col } from '../MLLayout/index';

const Demo = styled.div`
  clear: both
`;

const Mi = styled.li`
  padding: 6px;
  cursor: pointer;
  list-style: none;
  &:hover {
    background-color: ${Colors.very_light_aqua};
  }
`;
const ColorCell = styled.div`
  flex: 1 0 20%;
  box-sizing: border-box;
  background: #e0ddd5;
  color: #171e42;
  padding: 10px;
  &:hover {
    color: #ffffff;
  }
`;
const ColorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SideBar = styled.div`
  position: fixed;
  font-family: 'Source Sans Pro';
  font-weight: 300;
`;
const SideMenu = styled.ul`
  list-style: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;
`;


class _Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleA: true
    };
  }
  _goTo = e => {
    console.log('click', e.target.innerHTML);
    const loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + e.target.innerHTML;
    return false;
  }
  render() {
    return (
      <Grid style={{ width: '100%'}}>
        <Row>
          <Col xs={ 1 } md={ 2 }>
            <SideBar>
              <h2>Macmillan<br />Component<br />Library</h2>
              <h3>API</h3>
              <SideMenu>
                { ['Toggle', 'Button', 'Menu', 'Accordion', 'AccordionList', 'Card'].map((key, i) => {
                  return <Mi key={ i } onClick={ this._goTo }>{ key }</Mi>;
                })}
              </SideMenu>
              <h3><a href="https://macmillanlearning.atlassian.net/wiki/display/CDL/" target="_new">View CDL in Confluence</a></h3>
            </SideBar>
          </Col>
          <Col xs={ 11 } md={ 10 }>
            <div className={ css['container'] }>
              <Demo>
                <a name="Toggle" />
                <h2>Toggle Switch</h2>
                <Playground className={ css['playground'] } codeText={ require('raw!../MLToggle/MLToggle.example') } scope={{React, ReactDOM, MLToggle}} />
                <MLToggleUsage />
              </Demo>


              <Demo>
                <a name="Button" />
                <h2>Button</h2>
                <Playground
                  codeText={ require('raw!../MLButton/MLButton.example') }
                  scope={{React, ReactDOM, MLButton, Colors, MLIcon}} />
                <MLButtonUsage />
              </Demo>

              <Demo>
                <a name="Menu" />
                <h2>Menu</h2>
                <Playground
                  codeText={ require('raw!../MLMenu/MLMenu.example') }
                  scope={{React, ReactDOM, MLMenu}} />
                <MLMenuUsage />
              </Demo>

              <Demo>
                <a name="Accordion" />
                <h2>Accordion</h2>
                <Playground
                  codeText={ require('raw!../MLAccordion/MLAccordion.example') }
                  scope={{React, ReactDOM, MLAccordion}} />
                <MLAccordionUsage />
              </Demo>

              <Demo>
                <a name="AccordionList" />
                <h2>AccordionList [WIP]</h2>
                <Playground
                  codeText={ require('raw!../MLAccordionList/MLAccordionList.example') }
                  scope={{React, ReactDOM, MLAccordionList}} />
              </Demo>

              <Demo>
                <a name="Card" />
                <h2>Card</h2>
                <Playground
                  codeText={ require('raw!../MLCard/MLCard.example') }
                  scope={{React, ReactDOM, MLCard, MLButton}} />
              </Demo>

              <Demo>
                <a name="Icon" />
                <h2>Icon</h2>
                <Playground codeText={ require('raw!../MLIcon/MLIcon.example') } scope={{React, ReactDOM, MLIcon, Colors}} />
                <MLIconUsage />
              </Demo>

              <div className={ css['demoWrap'] }>
                <h2>Color Palette</h2>
                <ColorGrid>
                  {
                    Object.keys(Colors).map((color, i) => {
                      const colorHex = Colors[color];
                      return (
                        <ColorCell key={ i } style={{ backgroundColor: colorHex }}>
                          { color }
                          <br />
                          { colorHex }
                        </ColorCell>

                      );
                    })
                  }
                </ColorGrid>
              </div>
              <div className={ css['demoWrap'] }>
                <h2>Icon Reference</h2>
                <div className={ css['iconGrid'] }>
                  {
                    MLIcon.listIcons.map((title, i) => {
                      return (
                        <span className={ css['iconWrap'] } key={ i }>
                          <MLIcon fill="black" type={ title } title={ title } />
                          <span className={ css['iconName'] }>{ title }</span>
                        </span>
                      );
                    })
                  }
                </div>
              </div>


              <div className={ css['demoWrap'] }>
                <h2>MarkerOrb</h2>
                <section className={ css['demoRow'] }>
                  <div className={ css['demoExample'] }>
                    <div className={ css['markerWrap'] } role="radiogroup">
                      {
                        ['#ffafaf', '#ffc196', '#faf2a9', '#acdba2', '#aee5d3',
                          '#a2d6dd', '#b0daff', '#e5c6e3', '#edb0ce', '#dddddd']
                          .map((color, i) => {
                            return (
                              <MarkerOrb
                                className={ css['marker'] }
                                key={ i }
                                label={ color }
                                onClick={ data => (console.log(data)) }
                                markerColor={ color }
                                noX={ true }
                                isSelected={ false } />
                            );
                          }
                        )
                      }
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default _Root;
