import React, { Component, PropTypes } from 'react';

import css from './mlReader.css';
import VSReader from '../VSReader/VSReader';

import HighlightModalCSS from '../HighlightModal/highlightModal.css';
import HighlightModal from '../HighlightModal/HighlightModal.js';

import HighlightList from '../HighlightList/HighlightList';
import ReviewSidebar from '../ReviewSidebar/ReviewSidebar';

import MLMenu from '../MLMenu/MLMenu';
import MLIcon from 'ml-react-cdl-icons';

let scrollTop = 0;
let lastScroll = 0;
let thisRefs;
class MLReader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlightPosition: {x:200,y:200},
      highlightVisible: false,
      highlightUpdate: false,
      markerId: false,
      markerObject: {},
      currentSyncId: '',
      noteText: '',
      highlightData: null,
      highlightObject: {},
      highlightArray: [],
      currentView: 'book',
      currentCFI: '',
      sidebarOpen: true,
      currentPage: null
    }
  }

  _eventHandler = (e,data) => {
    switch(e.type) {
      case 'book:selectionWithPosition':
        // Calculate position of highlight modal
        var distanceFromTop = Math.abs(data.eventPosition.top - data.selectionRect.top);
        var distanceFromBottom = Math.abs(data.eventPosition.top - data.selectionRect.bottom);
       
        lastScroll = scrollTop;
        var vPos = data.eventPosition.top + 70;
        var alignTop = distanceFromTop < distanceFromBottom
        
        if (alignTop) {
          vPos = data.selectionRect.top-120;
        }
        var positionHighlight = {
          x: data.eventPosition.left,
          y: Math.floor(vPos)
        }
        this._showNewHighlightModal(positionHighlight,data)
        console.log(':::: selectionWithPosition',data);
        break;
      case 'book:click' || 'book:selectionCancelled':
        this._hideHighlightModal(data);
        console.log(':::: click',e.target,data);
        break;
      case 'book:pagebreak':
        // This is undocumented, the data returned from pagebreak is an integer, presumably the page number, but these are not reliable
        this.setState({ currentPage: data });
        console.log('pagebreak',data);
        break;
      case 'highlight:click':
        let { height, left, width, top } = data.position;
        let leftOffset = parseInt(left + (width/2));
        let topOffset = parseInt( top + height + 100 );
        // Get highlight info from highlightArray because for some reason it's not stored in the highlight object
        const hData = this.state.highlightArray.find(obj => obj.syncId === data.syncId);

        this._showHighlightModal( {x: leftOffset, y: topOffset }, hData );

        console.log('highlight clicked', data, hData );
        break;
      case 'page:scroll':
        let scrollDiff =  Math.abs((lastScroll-scrollTop)/2);
        // Hide highlight on scroll because we can't scroll with the iframe
        if (this.state.highlightVisible === true) {
          if (scrollDiff > 10) { // This is arbitrary but should be non-zero to prevent agony
            this.setState({highlightVisible: false});
          }
        }
        //
        if (data.cfi.split('@')[0] !== 'null' && scrollDiff > 10) {
          // TODO: This needs a better solution, I'm trying to limit how often scroll updates state
          // Often enough so that highlights show up when expected but not so often as to impact performance
          // As yet haven't noticed performance issues but want to be safe
          this.setState({ currentCFI: data.cfi })
          lastScroll = data.scrollTop;
        }
          
        scrollTop = data.scrollTop;
        break;
      default:
       console.log("other event",e,data);
    }
  }

  _highlightEvents = (globalId,text) => {
    this.setState({
      markerId: globalId,
      noteText: text,
      highlightUpdate: true
    })
  }

  _manipulateHighlight = (syncId,action,newMarkerId,noteText) => {
    console.log(':::: manipulateHighlight',syncId,action,newMarkerId,noteText);
    let that = this;
    switch (action) {
      case 'delete':
        thisRefs.VS.Viewer.Book.deleteHighlight(syncId,function(res){
          that._refreshHighlights();
          console.log(':::: deleted',syncId, res);
        })
        break;
      case 'update':
        thisRefs.VS.Viewer.Book.updateHighlight(syncId, { markerId: newMarkerId, noteText: noteText },function(res){
          that._refreshHighlights();
          console.log(':::: updated!',syncId, res);
        })
        break;
    }
  }

  _showNewHighlightModal = (pos,data) => {
    this.setState({
      highlightVisible: true,
      highlightPosition: { x: pos.x, y: pos.y },
      currentSyncId: ''
    })
  }
  _showHighlightModal = (pos,data) => {
    console.log('show existing', data.noteText);
    this.setState({
      highlightVisible: true,
      highlightPosition: { x: pos.x, y: pos.y },
      noteText: data.noteText,
      currentSyncId: data.syncId,
      markerId: data.markerId
    })
  }


  _hideHighlightModal = () => {
    this.setState({
      highlightVisible: false,
      selectedMarkerId: false,
      markerId: false,
    })
  }
  _receiveVSData = (c) => {
    if (!!c.data.highlight) {
      this.setState({
        highlightUpdate: false,
        currentSyncId: c.data.highlight.syncId,
        highlightData: c.data.highlight,
        noteText: c.data.highlight.noteText
      })
    }
    console.log(':::: Done updating highlight data',c.data.highlight);
  }
 
  // Receive data from popup
  _receiveNoteText = (textareaValue) => {
    this.setState({ noteText: textareaValue });
  }

  //Receive markers from VSReader and setState to send marker data to highlight tool
  _receiveMarkerData = (markers) => {
    console.log(":: Receive marker data",markers);
    // Convert from array to object
    if ( !!markers) {
      let newMarkerObject = {};
      markers.map(function(marker,i){
        newMarkerObject[ marker.globalId ] = marker;
      });
      this.setState({
        markerObject: newMarkerObject
      })

    }
  }
  _receiveHighlights = (data) => {
    console.log(':: Receive highlightArray',data);
    if (!!data.highlights) {
      this.setState({ 
        highlightArray: data.highlights
      });
    }
  }
  _getJigsaw = () => {
    let that = this;
    this.refs.VS.Viewer.Book.getMarkers(function(res){
      if (res.status == 'ok') {
        that._receiveMarkerData(res.data.markers);
      }
    });
  }
  _refreshHighlights = () => {
    let that = this;
    this.refs.VS.Viewer.Book.getHighlights(function(res){
      if (res.status == 'ok') {
        that.setState({ 
          highlightArray: res.data.highlights,
        });

      }
    })
  }
  _goToHighlight = (syncId) => {
    thisRefs.VS.Viewer.Book.goToHighlight(syncId,function(res){
      console.log(':::: Go to highlight',syncId, res);
    })
  }
  _addBookmark = () => {
    thisRefs.VS.Viewer.Book.setBookmark({
      pbk_page: this.state.currentPage,
      epub_cfi: this.state.currentCFI,
    }, function(res){
      console.log(':::: booooookmaaaaaaarked!', res);
      thisRefs.VS.Viewer.Book.getBookmarks(function(bookmarks){
        console.log(':::: booooookmaaaaaaarks!', bookmarks);
      })
    })
  }
  _getBookmarks = () => {
    console.log('oooooooooooooo');
  }
  _toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }
  _showNotes = (click) => {
    this.setState({ currentView: 'notes' })

  }
  _showBook = (click) => {
    this.setState({ currentView: 'book' })
  }

  render() {
    console.log('RENDER mlReader');
    const { 
      currentCFI, 
      currentSyncId,
      highlightVisible, 
      highlightPosition, 
      highlightUpdate, 
      markerObject,
      markerId,
      noteText,
      sidebarOpen,
    } = this.state;
    thisRefs = this.refs;
    let reviewSidebar = null;
    if ( this.state.sidebarOpen ) {
      reviewSidebar = (
        <ReviewSidebar
          noteArray={ this.state.highlightArray }
          markerObject={ markerObject }
          clickHighlight={ this._goToHighlight }
          manipulateHighlight={ this._manipulateHighlight }
          currentCFI={ currentCFI }
        />
      )
    }

    return (
      <div className={ css['container'] }>
        <div className={ css['debugBox'] }>

        </div>
        <div className={ css['menuBar'] } >
          <ul className={ css['menu'] }>
            <li onClick={ this._showBook }  style={{ borderBottom: ( this.state.currentView == 'book' ?  '3px solid #DA1B2C' : 'transparent' ) }} className={ css['menuItem'] }>eBook</li>
            <li onClick={ this._showNotes } style={{ borderBottom: ( this.state.currentView == 'notes' ? '3px solid #DA1B2C' : 'transparent' ) }} className={ css['menuItem'] }>Notes</li>
          </ul>
        </div>
        <div className={ css['mainWrap'] }>
          <div style={{ display: this.state.currentView == 'book' ? 'flex' : 'none' }} className={ css['readerWrap'] }>
            <div className={ css['reviewWrap']}>
              <div className={ css['vsWrap']}>
                <VSReader 
                  ref='VS'
                  highlightUpdate={ highlightUpdate } 
                  noteText={ noteText } 
                  markerId={ markerId } 
                  syncId={ currentSyncId } 
                  markerCallback={ this._receiveMarkerData } 
                  mlCallback={ this._receiveVSData } 
                  eventHandler={ this._eventHandler } 
                  passHighlights={ this._receiveHighlights }
                  { ...this.props } />
                <HighlightModal 
                  highlightPosition={ highlightPosition } 
                  highlightVisible={ highlightVisible }
                  highlightEvents={ this._highlightEvents }
                  markerObject={ markerObject }
                  selectedMarkerId={ this.state.markerId }
                  noteText={ this.state.noteText }
                  orientation='vertical'/>
              </div>
              <div className={ sidebarOpen ? css['sidebarWrap'] + ' ' + css['sidebarOpen'] : css['sidebarWrap'] + ' ' +  css['sidebarClosed'] }>
                <div className={ css['sidebarExpander'] } onClick={ this._toggleSidebar }>
                  <MLIcon 
                    iconType={ this.props.icon }
                    className={ css['expanderIcon'] } 
                    iconFill='#666666'
                    iconType='clipboard'
                    iconTitle='Edit Note' />
                  <div className={ css['sidebarHeaderTitle']} >
                    { sidebarOpen ? 'Clipboard' : '' }
                  </div>
                </div>
                { reviewSidebar }
                <div className={ css['cfi'] }>
                  <div>Debug</div>
                  cfi:{this.state.currentCFI}
                  <br/>
                  pg:{this.state.currentPage}
                  <div onClick={ this._addBookmark } >
                    Bookmark
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: (this.state.currentView == 'notes' ? 'flex' : 'none') }} className={ css['notebookWrap'] }>
            <HighlightList
              highlightArray={ this.state.highlightArray }
              markerObject={ markerObject }
              manipulateHighlight={ this._manipulateHighlight }
            />
          </div>
        </div>
      </div>
    );
  }
}

MLReader.propTypes = {
  vbid: PropTypes.string.isRequired,
  cfi: PropTypes.string,
  start: PropTypes.string,
  stop: PropTypes.string,
  cb: PropTypes.func
};


export default MLReader;
