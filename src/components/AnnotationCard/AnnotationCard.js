import React, { Component, PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
//import css from '../HighlightList/highlightList.css';
import css from './annotationCard.css';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let deleteTimeout;
class AnnotationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
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

  render() {
    let { hasNote, deleteCallback, markerData, highlightObject: obj } = this.props;
    let hideThenDelete = this.hideMe.bind(this, obj.syncId)
    if (this.state.visible === true) {
      return (
        <div className={ css['box'] } >
          <div className={ css['header'] } >
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
          <div className={ css['content'] }>
            <blockquote className={ css['blockquote'] } style={{ backgroundColor: obj.vstColor }}>
              { obj.selectedText }
            </blockquote>
            <div className={ css['noteText'] }>
              { obj.noteText }
            </div>
          </div>
          <div className={ css['gutter'] }>

            <div className={ css['location'] }>
              <div className={ css['label'] }> { markerData.label }</div>
              { obj.cfi }
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

AnnotationCard.propTypes = {
  hasNote: PropTypes.bool.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  highlightObject: PropTypes.object.isRequired,
  markerData: PropTypes.object.isRequired
};
export default AnnotationCard;