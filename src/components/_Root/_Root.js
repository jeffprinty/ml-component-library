import React, { Component } from 'react';

import MLIcon from '../MLIcon/MLIcon';
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
      <div>
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
          <ul style={{ height: '400px', width: '250px', overflowY: 'scroll' }}>
          { iconArray.map(function(title,i){
              return (<li style={{ listStyle: 'none' }}key={i}><MLIcon iconType={title} iconTitle={title} /><span className={ css['iconName'] }>{title}</span></li>)
            })
          }
          </ul>
        </div>
        <div className={css['demoWrap']}>
          <h2>Buttons</h2>
          <pre>{`<MLButton title='Secondary Green' btnClass='secondary' secondary='green' clickFunc={function(click){}} />`}</pre>
          <MLButton title='Primary ' btnClass='primary' />
          <MLButton title='Primary Red' btnClass='primary' secondary='red' />
          <MLButton title='Primary Green' btnClass='primary' secondary='green' />
          <br/>
          <MLButton title='Secondary' btnClass='secondary' />
          <MLButton title='Secondary Red' btnClass='secondary' secondary='red' />
          <MLButton title='Secondary Green' btnClass='secondary' secondary='green' />
          <br/>
          <MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          <MLButton icon={<MLIcon iconTitle={ 'arrow_left' } iconType={ 'arrow_left' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
          <MLButton icon={<MLIcon iconTitle={ 'edit' } iconType={ 'edit' } iconFill='inherit' />} title='Primary' btnClass='primary' secondary='icon' />
        </div>
      </div>
    );
  }
}


export default _Root;
