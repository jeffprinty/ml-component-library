import React, { Component } from 'react';
import { MLIcon, MLMenu, MLCard, MLToggle, MLButton, MLAccordion, MLAccordionList } from '../index';
import MarkerOrb from '../MarkerOrb/MarkerOrb';

import '../../assets/styles/fonts.css';

import Colors from '../colors.js';

import css from './_root.css';

import styled from 'styled-components';

import Playground from 'component-playground';
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
  &:hover {
    background-color: ${Colors.very_light_aqua};
  }
`;
const NavLink = styled.a`
  text-decoration: none;
`;


class _Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleA: true
    };
  }
  _goTo = e => {
    console.log('click', e.target);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 1 } md={ 2 }>
            <div style={{ position: 'fixed' }}>
              <h2>Macmillan CDL</h2>
              <ul>
                { ['Toggle', 'Button', 'Menu', 'Accordion', 'AccordionList', 'Card'].map((key, i) => {
                  return <Mi key={ i }><NavLink href={ '#' + key } >{ key }</NavLink></Mi>;
                })}
              </ul>
            </div>
          </Col>
          <Col xs={ 11 } md={ 10 }>
            <div className={ css['container'] }>
              <Demo>
                <a title="toggle" />
                <h2>Toggle Switch</h2>
                <Playground codeText={ require('raw!../MLToggle/MLToggle.example') } scope={{React, ReactDOM, MLToggle}} />
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
                {
                  Object.keys(Colors).map((color, i) => {
                    const colorHex = Colors[color];
                    return (
                      <div key={ i } className={ css['colorGrid'] } style={{ backgroundColor: colorHex }}>
                        { color }
                        <br />
                        { colorHex }
                      </div>

                    );
                  })
                }
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
