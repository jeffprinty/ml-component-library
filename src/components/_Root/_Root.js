import React, { Component } from 'react';

import MLIcon from '../MLIcon/MLIcon';
import MLMenu from '../MLMenu/MLMenu';
import MLAccordion from '../MLAccordion/MLAccordion';
import MLCard from '../MLCard/MLCard';
import MLButton from '../MLButton/MLButton';
import MarkerOrb from '../MarkerOrb/MarkerOrb.js';

import '../../assets/styles/fonts.css';

import css from './_root.css';

let iconArray = ['alert_outline','alert','arrow_left','arrow_right','bar_chart','book','bookmark_outline','bookmark','box','calendar','cancel','caret_down','check','checkbox','chevron_down','chevron_left','chevron_right','chevron_up','clipboard','clock','comment_highlight','comment_microphone','comment_question','comment_text','comment_thumbs_up','comment','cursor','dock_left','dock_right','dock_top','document','download','edit','expand','grid_4','grid_9','head','heart_outline','heart','help_outline','help','highlight','home','item_add','item_copy','item_edit','item_remove','link','list_left','list_right','maximize','menu','minimize','minus','more','mortar_board','move','not','pause','person','play','plus','pointer_outline','pointer','print','search','spreadsheet','stop','text_size','thumbs_down','thumbs_up','tools','upload','video','x','zoom_in','zoom_out'];

class _Root extends Component {
  constructor() {
    super();
  }

  _getIcons = () => {
    //return (componentArray);
  }

  render() {
    let componentArray = [];
    console.log(this._getIcons);
    return (
      <div className={ css['container']}>
        <h1>ML CDL React Kitchen Sink</h1>
        <div className={css['demoWrap']}>
          <h2>MarkerOrb</h2>
          <div className={css['markerWrap']}>
            {['#ffafaf','#ffc196','#faf2a9','#acdba2','#aee5d3','#a2d6dd','#b0daff','#e5c6e3','#edb0ce','#dddddd'].map(function(color,i){
              return (<MarkerOrb className={ css['marker'] } key={ i } markerColor={ color } noX={ true } isSelected={ false } />)
            })
        }
          </div>
        </div>
        <div className={css['demoWrap']}>
          <h2>Menu</h2>
          <MLMenu 
            itemClicked={ function(c){console.log('clicked item',c)} } 
            menuTitle='test!'
            menuArray={['beans','baby foxes']}/>
        <pre>{`
<MLMenu 
  itemClicked={ function(c){console.log('clicked item',c)} } 
  menuTitle='test!'
  menuArray={['beans','baby foxes']}/>
        `}</pre>
        </div>
        <div className={css['demoWrap']}>
          <h2>Accordion</h2>
          <MLAccordion
            title='Floop'
            content='Scoobers' />
        </div>
        <div className={css['demoWrap']}>
          <h2>Cards</h2>
          <MLCard 
            title="The Gear Wars" 
            content="It was never really about the gears." 
            button={<MLButton title='Primary ' btnClass='primary' />}
            />
        <pre>{`
<MLCard 
  title="The Gear Wars" 
  content="It was never really about the gears." 
  button={<MLButton title='Primary ' btnClass='primary' />}
  />
        `}</pre>
        </div>
        <div className={css['demoWrap']}>
          <h2>Icons</h2>
          <pre>{`
import MLIcon from 'ml-react-cdl-icons';
<MLIcon 
  iconTitle="add note" 
  iconFill="#ffffff" 
  iconType="edit" 
  iconWidth="24" 
  iconHeight="24"
  viewBox="0 0 24 24"
  className="icon" />
          `}
          </pre>
          <div className={css['iconGrid']}>
          { iconArray.map(function(title,i){
              return (<span className={css['iconWrap']} key={i}><MLIcon iconType={title} iconTitle={title} /><span className={ css['iconName'] }>{title}</span></span> )
            })
          }
          <pre>{`
<MarkerOrb key={ obj.globalId } markerColor={ obj.vstColor } globalId={ obj.globalId } clickFunc={ that._selectHighlightColor } isSelected={ selectedMarkerId == obj.globalId } />
          `}</pre>
          </div>
        </div>
        <div className={css['demoWrap']}>
          <h2>Buttons</h2>
          <h3>Primary</h3>
          <MLButton title='Primary ' btnClass='primary' />
          <MLButton title='Primary Red' btnClass='primary' secondary='red' />
          <MLButton title='Primary Green' btnClass='primary' secondary='green' />
           <pre>{`
<MLButton title='Primary ' btnClass='primary' />
<MLButton title='Primary Red' btnClass='primary' secondary='red' />
<MLButton title='Primary Green' btnClass='primary' secondary='green' />
            `}</pre>
          <h3>Secondary</h3>
          <MLButton title='Secondary' btnClass='secondary' />
          <MLButton title='Secondary Red' btnClass='secondary' secondary='red' />
          <MLButton title='Secondary Green' btnClass='secondary' secondary='green' />
          <pre>{`
<MLButton title='Secondary' btnClass='secondary' />
<MLButton title='Secondary Red' btnClass='secondary' secondary='red' />
<MLButton title='Secondary Green' btnClass='secondary' secondary='green' />
          `}</pre>
          <h3>With icon</h3>
          <MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          <MLButton icon={<MLIcon iconTitle={ 'arrow_left' } iconType={ 'arrow_left' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          <MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          <pre>{`
<MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
<MLButton icon={<MLIcon iconTitle={ 'arrow_left' } iconType={ 'arrow_left' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
<MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          `}</pre>

        </div>
      </div>
    );
  }
}


export default _Root;
