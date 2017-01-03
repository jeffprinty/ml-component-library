import React, { Component, PropTypes } from 'react';
import css from './reviewSidebar.css';
import MLIcon from 'ml-react-cdl-icons';

import SidebarChecklist from '../SidebarChecklist/SidebarChecklist.js';
import ReviewAnnotationCard from '../ReviewAnnotationCard/ReviewAnnotationCard.js'
import MarkerOrb from '../MarkerOrb/MarkerOrb.js';
import { compareCFIs } from './CFITool.js';

class ReviewSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: {},
      selectedChapters: {},
      selectedMarkers: {},
      noteArray: this.props.noteArray,
      sidebarOpen: true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.props);
  }

  //_compareCFI = (

  _renderList = (noteArray) => {
    let listArray = [];
    let that = this;
    let currentCFI = this.props.currentCFI.match(/\/4\/2\/([\d]+)\//i);
    noteArray.map(function(obj,i){
      let hasNote = obj.noteText !== '';

      let cfiDiff = compareCFIs(obj.cfi,that.props.currentCFI,12);
      if ( Math.abs( cfiDiff ) < 8 ) {
        listArray.push(
           <ReviewAnnotationCard 
            hasNote={ hasNote }
            highlightObject={ obj }
            clickHighlight={ that.props.clickHighlight }
            modifyCallback={ that.props.manipulateHighlight }
            markerObject={ that.props.markerObject }
            markerId={ obj.markerId }
            key={ obj.syncId }
          />
        )
      } 
      
    })
    return listArray;
          
  }

  _filterAnnotations = ( filterType ) => {
    let _filters = this.state.selectedFilters;
    typeof _filters[filterType] == 'undefined' ? _filters[filterType] = false : _filters[filterType] = !_filters[filterType];
    this.setState({ selectedFilters: _filters });
  }

  _filterMarkers = ( globalId ) => {
    let _filters = this.state.selectedMarkers;
    typeof _filters[ globalId ] == 'undefined' ? _filters[ globalId ] = false : _filters[ globalId ] = !_filters[ globalId ];
    this.setState({ selectedMarkers: _filters });
  }

  render() {
    const { noteArray, markerObject } = this.props;
    let that = this;
    return (
      <div className={ this.state.sidebarOpen ? css['sidebarOpen'] : css['sidebarClosed'] } >
        { this.state.sidebarOpen ?
           this._renderList( noteArray )
           :
           null
        }
      </div>
    )
  }
}
ReviewSidebar.defaultProps = {
  noteArray: [],
  markerObject: {},
  currentCFI: ''
}
ReviewSidebar.propTypes = {
  noteArray: PropTypes.array,
  markerObject: PropTypes.object,
  manipulateHighlight: PropTypes.func,
  clickHighlight: PropTypes.func,
  currentCFI: PropTypes.string.isRequired,
};

export default ReviewSidebar;