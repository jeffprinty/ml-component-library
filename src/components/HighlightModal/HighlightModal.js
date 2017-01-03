import React, { Component, PropTypes } from 'react';

import hCSS from './highlightModal.css';
import MLIcon from 'ml-react-cdl-icons';
import MarkerOrb from '../MarkerOrb/MarkerOrb.js';

let currentNoteText = '';

class HighlightModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      noteVisible: false,
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.props);
  }

  _showNote = () => {
    this.setState({
      noteVisible: true
    })
  }

  _hideNote = () => {
    this.setState({
      noteVisible: false,
    })
    // TODO: detect input in textarea and handle closing without saving
  }

  _selectHighlightColor = (clicked) => {
    this.props.highlightEvents( clicked, this.state.noteText);
    // const { selectedMarkerId } = this.state;
    // if ( selectedMarkerId == clicked.target.id ) {
    //   this.setState({ selectedMarkerId: false });
    // } else {
    //   this.props.updateNoteText(currentNoteText);
    //   this.setState({ selectedMarkerId: clicked.target.id });
    // }

  }

  _saveAndClose = () => {
    this.props.highlightEvents( this.state.selectedMarkerId, this.state.noteText )
    this._hideNote();
  }

  _textareaChange = (e) => {
    this.setState({ noteText: e.target.value })
  }
  render() {
    const { highlightVisible, highlightPosition:hPos, highlightEvents, highlightData, markerObject, orientation, selectedMarkerId, noteText } = this.props;
    const { noteVisible } = this.state;
    let markerArray = [];
    let that = this;
    if (highlightVisible == false) {
      return null
    } else {
      return (
        <div style={ { left: hPos.x - 10, top: hPos.y } } className={ hCSS['container'] }>
          <div className={ hCSS['highlight-wrap' + ( orientation === 'vertical' ? '-vertical' : '-horizontal' )] } >
            <div className={ hCSS['highlight-list' ] } >
              {  
                Object.keys(markerObject).map(function(key,i){
                  const obj = markerObject[ key ];
                  return(<MarkerOrb key={ obj.globalId } markerColor={ obj.vstColor } globalId={ obj.globalId } clickFunc={ that._selectHighlightColor } isSelected={ selectedMarkerId == obj.globalId } />)
                })
              } 
              <div name='edit' className={ hCSS['highlight-edit'] } style={{ display: ( orientation === 'vertical' ? 'block' : 'table-cell' ) }}>
                {noteVisible ?
                  <div className={ hCSS['icon'] }  onClick={this._hideNote}>
                    <MLIcon iconType="cancel" iconTitle="cancel" />
                  </div>
                  :
                  <div className={ hCSS['icon'] }  onClick={ this._showNote }>
                    <MLIcon iconType="edit" iconTitle="add note" />
                  </div>
                }
              </div>
            </div>
          </div>
          <div className={ noteVisible ? hCSS['comment-wrap'] : hCSS['hidden'] }>
            <textarea value={ noteText } className={ hCSS['comment-textarea']} onChange={ this._textareaChange } ></textarea>
            <div className={ hCSS['button-wrap']}>
              <button onClick={ this._saveAndClose } className={ hCSS['save-btn'] }>Save</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
HighlightModal.defaultProps = {
  markerObject: {},
}
HighlightModal.propTypes = {
  highlightVisible: PropTypes.bool,
  noteText: PropTypes.string,
  highlightPosition: PropTypes.object,
  highlightEvents: PropTypes.func,
  updateNoteText: PropTypes.func,
  markerObject: PropTypes.object,
};

export default HighlightModal;