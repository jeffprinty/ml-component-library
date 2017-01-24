import React, { Component } from 'react';

import MLIcon from '../MLIcon/MLIcon';
import MLMenu from '../MLMenu/MLMenu';
import MLAlert from '../MLAlert/MLAlert';
import MLAccordion from '../MLAccordion/MLAccordion';
import MLCard from '../MLCard/MLCard';
import MLToggle from '../MLToggle/MLToggle';
import MLButton from '../MLButton/MLButton';
import MarkerOrb from '../MarkerOrb/MarkerOrb';

import ESnippet from '../esnippet.js';
import '../../assets/styles/fonts.css';

import Highlight from 'react-highlight';

import css from './_root.css';

let iconArray = ['alert_outline','alert','arrow_left','arrow_right','bar_chart','book','bookmark_outline','bookmark','box','calendar','cancel','caret_down','check','checkbox','chevron_down','chevron_left','chevron_right','chevron_up','clipboard','clock','comment_highlight','comment_microphone','comment_question','comment_text','comment_thumbs_up','comment','cursor','dock_left','dock_right','dock_top','document','download','edit','expand','grid_4','grid_9','head','heart_outline','heart','help_outline','help','highlight','home','item_add','item_copy','item_edit','item_remove','link','list_left','list_right','maximize','menu','minimize','minus','more','mortar_board','move','not','pause','person','play','plus','pointer_outline','pointer','print','search','spreadsheet','stop','text_size','thumbs_down','thumbs_up','tools','upload','video','x','zoom_in','zoom_out'];

class _Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleA: true
    }
  }
  _clickToggle(val) {
    console.log('current toggle val', val);
    this.setState({toggleA: !this.state.toggleA});
  }

  render() {
    return (
      <div className={ css['container']}>
        <h1>ML CDL React Kitchen Sink</h1>
        <div className={css['demoWrap']}>
          <h2>VitalSource Embedded Snippet eReader ({ this.state.toggleA ? 'Standard' : 'Enhanced' } )</h2>
          <div className={ css['eSnippetContainer'] }>
            <ESnippet
              vbid={ '9780203370360'}
              cfi={ '6/150'}
              start={ '/4/6/2'}
              stop={ '/4/6/8/4'}
              highlightsEnabled={true} />
          </div>
            
        </div>
        <div className={css['demoWrap']}>
          <h2>Toggle Switch</h2>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLToggle 
                label='Toggle' 
                checked={ this.state.toggleA } 
                onChange={ this._clickToggle } />
              <h3>Disabled switches</h3>
              <MLToggle 
                label='Toggle' 
                checked={ true } 
                disabled={ true } 
                onChange={ this._clickToggle } />
              <MLToggle 
                label='Toggle' 
                checked={ false } 
                disabled={ true } 
                onChange={ this._clickToggle } />
              <div ref='toggleVal'>{ this.state.toggleA }</div>
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLToggle checked={ true }
  disabled={ true } 
  onChange={ this._clickToggle } />  
              `}</Highlight>
            </div>
          </section>
        </div>
        <div className={css['demoWrap']} style={{display: 'none'}}>
          <MLAlert alertType='info' icon='warning' text='Alert!' />
        </div>
        <div className={css['demoWrap']}>

          <h2>MarkerOrb</h2>
          <div className={css['markerWrap']} role='radiogroup'>
            {
              ['#ffafaf','#ffc196','#faf2a9','#acdba2','#aee5d3','#a2d6dd','#b0daff','#e5c6e3','#edb0ce','#dddddd']
                .map(function(color,i){
                  return (
                    <MarkerOrb 
                      className={ css['marker'] } 
                      key={ i } 
                      label={ color }
                      onClick={ (data) => console.log(data) }
                      markerColor={ color } 
                      noX={ true } 
                      isSelected={ false } />
                    )
                }
              )
            }
          </div>
          <pre>{`
<MarkerOrb key={ obj.globalId } markerColor={ obj.vstColor } globalId={ obj.globalId } onClick={ that._selectHighlightColor } isSelected={ selectedMarkerId == obj.globalId } />
          `}</pre>
        </div>
        <div className={css['demoWrap']}>
          <h2>Menu</h2>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLMenu 
                itemClicked={ function(c){console.log('clicked item',c)} } 
                menuTitle='test!'
                menuArray={['beans','baby foxes']}/>
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLMenu 
  itemClicked={ () => {)} } 
  menuTitle='test!'
  menuArray={['beans','baby foxes']}/>`}
              </Highlight>
            </div>
          </section>
        </div>
        <div className={css['demoWrap']}>
          <h2>Accordion</h2>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLAccordion
                title="Here's the title"
                content='The content goes here' />
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLAccordion
  title="Here's the title"
  content='The content goes here' />
              `}</Highlight>
            
            </div>
          </section>
        </div>
        <div className={css['demoWrap']}>
          <h2>Cards</h2>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLCard 
                title="The Gear Wars" 
                content="It was never really about the gears." 
                button={<MLButton title='Learn More ' btnClass='primary' />}
                />
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLCard 
  title="The Gear Wars" 
  content="It was never really about the gears." 
  button={<MLButton title='Primary ' btnClass='primary' />}
  />`
            }</Highlight>

            </div>
          </section>
        </div>
        <div className={css['demoWrap']}>
          <h2>Icons</h2>
          <Highlight className='javascript'>{
`npm install ml-react-cdl-icons --registry http://npm.macmillantech.com:8080

import MLIcon from 'ml-react-cdl-icons';
<MLIcon 
  title="add note" 
  fill="#ffffff" 
  type="edit" 
  width="24" 
  height="24"
  viewBox="0 0 24 24"
  className="icon" />
          `}
          </Highlight>
          <div className={css['iconGrid']}>
          { iconArray.map(function(title,i){
              return (<span className={css['iconWrap']} key={i}><MLIcon type={title} title={title} /><span className={ css['iconName'] }>{title}</span></span> )
            })
          }
          </div>
        </div>
        <div className={css['demoWrap']}>
          <h2>Buttons</h2>
          <h3>Primary</h3>

          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLButton title='Primary ' btnClass='primary' />
              <MLButton title='Primary Red' btnClass='primary' btnType='red' />
              <MLButton title='Primary Green' btnClass='primary' btnType='green' />
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLButton 
  title='Primary ' 
  btnClass='primary' />
<MLButton 
  title='Primary Red' 
  btnClass='primary' 
  btnType='red' />
<MLButton 
  title='Primary Green' 
  btnClass='primary' 
  btnType='green' />`}
              </Highlight>
            </div>
          </section>
          <h3>Secondary</h3>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLButton title='Secondary' btnClass='secondary' />
              <MLButton title='Secondary Red' btnClass='secondary' btnType='red' />
              <MLButton title='Secondary Green' btnClass='secondary' btnType='green' />
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLButton 
  title='Secondary' 
  btnClass='secondary' />
<MLButton 
  title='Secondary Red' 
  btnClass='secondary' 
  btnType='red' />
<MLButton 
  title='Secondary Green' 
  btnClass='secondary' 
  btnType='green' />`}
              </Highlight>
            </div>
          </section>
          <h3>With icon</h3>
          <section className={css['demoRow']}>
            <div className={css['demoExample']}>
              <MLButton icon={<MLIcon title={ 'edit' } type={ 'edit' } fill='inherit' />} title='Primary' btnClass='primary' btnType='icon' />
              <MLButton icon={<MLIcon title={ 'arrow_left' } type={ 'arrow_left' } fill='inherit' />} title='Primary' btnClass='primary' btnType='icon' />
              <MLButton icon={<MLIcon title={ 'edit' } type={ 'edit' } fill='inherit' />} title='Primary' btnClass='primary' btnType='icon' />
            </div>
            <div className={css['demoCode']}>
              <Highlight className='javascript'>{
`<MLButton 
  icon={<MLIcon />} 
  title='Primary' 
  btnClass='primary' 
  btnType='icon' />
<MLButton 
  title='Primary' 
  btnClass='primary' 
  btnType='icon' />
<MLButton 
  icon={<MLIcon />} 
  title='Primary' 
  btnClass='primary' 
  btnType='icon' />`}
              </Highlight>
            </div>
          </section>
        </div>
      </div>
    );
  }
}


export default _Root;
