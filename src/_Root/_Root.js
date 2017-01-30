import React, { Component } from 'react';
import { MLIcon, MLMenu, MLCard, MLToggle, MLButton, MLAccordion } from '../index';
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

const Demo = styled.div`
  clear: both
`;


class _Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleA: true
    };
  }

  render() {
    return (
      <div className={ css['pageWrap'] }>
        <div className={ css['sidebar'] }>
          boop
        </div>
        <div className={ css['container'] }>
          <h1>ML CDL React Kitchen Sink</h1>
          <Demo>
            <h2>Toggle Switch</h2>
            <Playground codeText={ require('raw!../MLToggle/MLToggle.example') } scope={{React, ReactDOM, MLToggle}} />
            <MLToggleUsage />
          </Demo>


          <Demo>
            <h2>Button</h2>
            <Playground
              codeText={ require('raw!../MLButton/MLButton.example') }
              scope={{React, ReactDOM, MLButton, Colors, MLIcon}} />
            <MLButtonUsage />
          </Demo>

          <Demo>
            <h2>Menu</h2>
            <Playground
              codeText={ require('raw!../MLMenu/MLMenu.example') }
              scope={{React, ReactDOM, MLMenu}} />
            <MLMenuUsage />
          </Demo>

          <Demo>
            <h2>Accordion</h2>
            <Playground
              codeText={ require('raw!../MLAccordion/MLAccordion.example') }
              scope={{React, ReactDOM, MLAccordion}} />
          </Demo>

          <Demo>
            <h2>Card</h2>
            <Playground
              codeText={ require('raw!../MLCard/MLCard.example') }
              scope={{React, ReactDOM, MLCard, MLButton}} />
          </Demo>

          <Demo>
            <h2>Icon</h2>
            <Playground codeText={ require('raw!../MLIcon/MLIcon.example') } scope={{React, ReactDOM, MLIcon, Colors}} />
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
      </div>
    );
  }
}


export default _Root;
