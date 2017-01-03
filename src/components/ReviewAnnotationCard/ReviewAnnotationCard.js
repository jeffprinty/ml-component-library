import React, { Component, PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
//import css from '../HighlightList/highlightList.css';
import css from './reviewAnnotationCard.css';
import moment from 'moment';
import MarkerOrb from '../MarkerOrb/MarkerOrb.js';

let deleteTimeout;
let editTimeout;
class ReviewAnnotationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      showAll: false,
      showNote: this.props.hasNote,
      noteText: this.props.highlightObject.noteText || ''
    }
  }
  // Leaving this in because we might want to also be able to delete from this view
  hideMe = (syncId) => {
    let { deleteCallback, highlightObject: obj } = this.props;
    let { visible } = this.state;
    this.setState({ visible: false });
    deleteTimeout = setTimeout( function(){
      deleteCallback( obj.syncId );
    }, 5000 )
  }
  unHide = () => {
    clearTimeout( deleteTimeout );
    this.setState({ visible: true })
  }
  _editClick = (click) => {

    this.noteFocus.focus();
  }
  _orbClick = (which) => {
    const { selected, globalId, syncId } = which;
    console.log('which',which);
    if ( which.selected ) {
      this.setState({ showAll: !this.state.showAll })
    } else {
      console.log('Update highlight '+syncId+' to ' + globalId, this.state);
      this.props.modifyCallback(syncId, 'update', globalId, this.state.noteText);
    }
  }
  _clickHighlight = (which) => {
    this.props.clickHighlight(which);
  }
  _editNote = (ee) => {
    let { markerObject, markerId, highlightObject, modifyCallback } = this.props;
    let { noteText } = this.state;

    if ( !!ee.target.value ) {
      this.setState({ noteText: ee.target.value });
    }
    // Debounce timeout
    clearTimeout( editTimeout );
    editTimeout = setTimeout( function(){ 
      //this.props.modifyCallback(noteData.syncId, 'update', noteData.globalId, this.state.noteText);
      modifyCallback( highlightObject.syncId, 'update', markerId, noteText);
      console.log('called', noteText);
    }, 500)
    
  }
  render() {
    let { hasNote, deleteCallback, markerId, markerObject, highlightObject: obj } = this.props;
    let { showNote, noteText } = this. state;
    let hideThenDelete = this.hideMe.bind(this, obj.syncId);
    let clickHighlight = this._clickHighlight.bind(this, obj.syncId);
    let that = this;

    if (this.state.visible === true) {
      return (
        <div className={ css['box'] } >
          <div className={ css['hidden'] } >
            <div className={ css['headerIcon'] } >
              <MLIcon className={ css['headerIcon'] } iconType={ hasNote ? 'item_edit' : 'highlight' } iconTitle='Highlight Icon' />
            </div>
            <div className={ css['headerText'] }>
              { hasNote ? 'You made a note' : 'You added a highlight' }
            </div>
            <div className={ css['edit'] } >
              <span className={ css['headerButton'] } onClick={ hideThenDelete } >
                <div className={ css['headerText'] }>Delete</div>
                <MLIcon className={ css['headerIcon'] } iconType={ 'eraser' } iconTitle='Delete Note' />
              </span>
            </div>
          </div>
          <div className={ css['content'] } onClick={ clickHighlight } >
            <div className={ css['blockquote'] } style={{ backgroundColor: obj.vstColor }}>
              { obj.selectedText }
            </div>
            <div className={ css['noteTextWrap'] }>
              <textarea
                className={ hasNote ? css['noteText'] : css['noteText'] + ' ' + css['noteTextEmpty'] }
                value={ noteText }
                onChange={ this._editNote } 
                onBlur={ this._editNote } 
                ref={(input) => { this.noteFocus = input; }}
              ></textarea>
              <div  onClick={ this._editClick }>
                <MLIcon 
                  iconType={ 'item_edit' } 
                  className={ css['noteEditIcon'] }
                  style={{ display: !hasNote ? 'flex' : 'none', fill: '#666666' }}
                  iconTitle='Edit Note' />
              </div>
            </div>
          </div>
          <div className={ css['gutter'] }>
            <div className={ css['location'] }>
                {
                  Object.keys(markerObject).map(function(key,i){
                    const mrkr = markerObject[ key ];
                    let _isSelected = mrkr.globalId == markerId;
                    let _orbClick = that._orbClick.bind(that, {syncId: obj.syncId, globalId: mrkr.globalId, selected: _isSelected});
                    return(
                      <MarkerOrb 
                        key={ mrkr.globalId }
                        markerColor={ mrkr.vstColor }
                        circleColor="#686868"
                        globalId={ mrkr.globalId }
                        clickFunc={ _orbClick }
                        isSelected={ _isSelected } 
                        className={ css['gutterIcon'] }
                        hoverChange={ true }
                        noX={ true }
                        style={{ display: ( _isSelected || that.state.showAll ? 'inline' : 'none') }}
                      />

                    )
                  })
                }
              <div className={ css['label'] } style={{ display: that.state.showAll ? 'none' : 'inline' }}> 
                { !!markerObject[markerId] ? markerObject[markerId].label : '' }
              </div>
            </div>
            <div className={ css['modified'] }>
              { moment(obj.lastModifiedAt,'ddd, DD MMM YYYY HH:mm:ss ZZ').fromNow() }
            </div>
          </div>
        </div>
      )
    } else {
      return (<div className={ css['box'] } onClick={ this.unHide } >
        <div className={ css['header'] } style={{ color: '#DA1B2C', cursor: 'pointer' }} >
          <div className={ css['headerIcon'] } >
            <MLIcon className={ css['headerIcon'] } iconType='info_outline' iconTitle='Info' />
          </div>
          <div className={ css['headerText'] }>
            { hasNote ? 'You deleted a note' : 'You deleted a highlight' }
          </div>
          <div className={ css['edit'] } >
            <span className={ css['headerButton'] } >
              <div className={ css['headerText'] }>Undo?</div>
            </span>
          </div>
        </div>
      </div>)
    }
  }

}

ReviewAnnotationCard.propTypes = {
  hasNote: PropTypes.bool.isRequired,
  deleteCallback: PropTypes.func,
  modifyCallback: PropTypes.func,
  clickCallback: PropTypes.func,
  highlightObject: PropTypes.object.isRequired,
  markerObject: PropTypes.object.isRequired
};
export default ReviewAnnotationCard;