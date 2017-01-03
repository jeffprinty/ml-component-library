import React, { Component, PropTypes } from 'react';

import vsReaderCSS from './vsReader.css';


class VSReader extends Component {
  componentWillReceiveProps(nextProps) {
    //console.log('VS_WILLRECEIVEPROPS', nextProps);
    const { cfi:ncfi, start:nstart, stop:nstop, vbid:nvbid, cb:ncb, highlightData, noteText, highlightUpdate, markerId, syncId } = nextProps;
    const { cfi, start, stop, vbid, cb } = this.props;
    let contentNode;
    let iframe;

    // Highlight business, this is a mess rn, will refactor
    let that = this;

    if ( highlightUpdate == true ) {
      if (syncId !== '') { //Highlight exists, update
        this.Viewer.Book.updateHighlight( syncId,
          {
            markerId: markerId,
            noteText: noteText
          }, 
          function(response){
            console.log(":: Highlight updated",syncId,noteText);
            that.props.mlCallback(response);
          });
      } else { // create
        this.Viewer.Book.highlightCurrentSelection({
          markerId: markerId,
          noteText: noteText
        }, function(response){
          console.log(':: Highlight created',response.syncId);
          that._updateHighlights(that);
          that.props.mlCallback(response);
        });
        
      }
      return true;
    }

    if (ncfi === cfi && nstart === start &&
      nstop === stop && nvbid === vbid &&
      ncb === cb) {
      //console.log("No update for you");
      return;
    }
    contentNode = document.getElementById('content');
    iframe = document.getElementsByTagName('iframe')[0];
    contentNode.removeChild(iframe);

    this.JigsawCtrl(nvbid, ncfi, nstart, nstop);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { cfi: ncfi, start: nstart, stop: nstop, vbid: nvbid, cb: ncb } = nextProps;
    const { cfi, start, stop, vbid, cb } = this.props;

    if (ncfi === cfi && nstart === start &&
      nstop === stop && nvbid === vbid &&
      ncb === cb) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    const { cfi, start, stop, vbid, cb } = this.props;
    this.JigsawCtrl(vbid, cfi, start, stop);
  }

  _updateHighlights = (that) => {
    console.log(':: Highlights updated');
    that.Viewer.Book.getHighlights(function(highlights){
      if (highlights.status == 'ok') {
        that.props.passHighlights(highlights.data)
      }
    })
  }

  _jigsaw = (d,cb) => {
    console.log('data received');
    this.Viewer.Book.getHighlights(function(highlights){
      if (highlights.status == 'ok') {
        cb(highlights)
      }
    });
  }

  _highlightUpdate = (syncId,markerId,noteText,cb) => {
    let that = this;
    if ( this.props.syncId !== '') { //Highlight exists, update
        this.Viewer.Book.updateHighlight( syncId,
          {
            markerId: markerId,
            noteText: noteText
          }, 
          function(response){
            console.log(":: Highlight updated",syncId,noteText);
            that.props.mlCallback(response);
          });
      } else { // create
        this.Viewer.Book.highlightCurrentSelection({
          markerId: markerId,
          noteText: noteText
        }, function(response){
          console.log(':: Highlight created',response.syncId);
          that._updateHighlights(that);
          that.props.mlCallback(response);
        });
        
      }
  }

  viewer_ready = (event) => {
    // Bind All the events
    let eventList = [
      'book:navigationRequested',
      'book:click',
      //'book:selectionCancelled',
      'book:selectionWithPosition',
      'book:pagebreak',
      'book:touchstart',
      'book:touchend',
      'book:touchmove',
      'book:keyup',
      'book:keydown',
      'book:keypress',
      //'book:mousemove',
      'page:ready',
      'page:load',
      'page:unload',
      'page:resize',
      'page:scroll',
      //'page:transform',
      'user:signout',
      'highlight:click',
    ];
    let that = this;

    for (let ee of eventList){
      that.Viewer.bind(ee, function(e, data){
        that.props.eventHandler(e,data);
      });
    } 

    this.Viewer.Book.getCitationInfo(function(cit){
      console.log('citation',cit);
    })

    this._updateHighlights(this);
    console.log('VIEWERREADY', event);
  };

  JigsawCtrl = (vbid, cfi, start, stop) => {
    let that = this;

    this.init = () => {
      let createObject = {
        vbid,
        el: 'content',
        brand: 'vitalsource',
        highlightsEnabled: true
      };

      if (start && stop) {
        createObject = Object.assign(createObject, {
          cfi,
          contentRange: ',' + start + ',' + stop
        });
      } else {
        createObject = Object.assign(createObject, {
          page: 'recent'
        });
      }

      that.Viewer = Jigsaw.createPageViewer(createObject, that.viewer_ready);

      that.jigsawUser = Jigsaw.User;
      that.jigsawViewer = Jigsaw.Viewer;
      that.jigsawBook = Jigsaw.Viewer.Book;

      Jigsaw.User.getMarkers(function(response){
        // Pass markers up to MLReader
        that.props.markerCallback(response.data.markers);
      });

    };

    this.init();
  };

  render() {
    console.log('RENDER vsReader');
    return (
      <div id="content" className={ vsReaderCSS['content'] } />
    );
  }
}

VSReader.propTypes = {
  vbid: PropTypes.string.isRequired,
  cfi: PropTypes.string,
  start: PropTypes.string,
  stop: PropTypes.string,
  eventHandler: PropTypes.func,
  highlightUpdate: PropTypes.bool,
  mlCallback: PropTypes.func,
  markerCallback: PropTypes.func,
  passHighlights: PropTypes.func,
};


export default VSReader;
