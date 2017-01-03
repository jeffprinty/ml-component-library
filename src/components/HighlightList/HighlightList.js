import React, { Component, PropTypes } from 'react';
import hlCSS from './highlightList.css';
import MLIcon from 'ml-react-cdl-icons';
import SidebarChecklist from '../SidebarChecklist/SidebarChecklist.js';
import AnnotationCard from '../AnnotationCard/AnnotationCard.js'
import MarkerOrb from '../MarkerOrb/MarkerOrb.js';

class HighlightList extends Component {
  constructor(props) {
    super(props);
    this._deleteNote = this._deleteNote.bind(this);
    this.state = {
      selectedFilters: {},
      selectedChapters: {},
      selectedMarkers: {},
      highlightArray: this.props.highlightArray,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.props);
  }
  
  _deleteNote = (syncId) => {
    this.props.manipulateHighlight(syncId,'delete');
  }

  _renderList = (highlightArray) => {
    let listArray = [];
    let that = this;
    highlightArray.map(function(obj,i){
      let hasNote = obj.noteText !== '';
      let _deleteNote = that._deleteNote.bind(that, obj.syncId);
      
      if ( that.state.selectedFilters['Notes'] === false && hasNote === true ) {
        //console.log("hide notes");
      } else if ( that.state.selectedFilters['Highlights'] === false && hasNote === false ) {
        //console.log("hide highlights");
      } else if ( that.state.selectedMarkers[ obj.markerId ] === false ) {
        //console.log("not showing this marker type");
      } else {
        listArray.push(
          <AnnotationCard 
            hasNote={ hasNote }
            deleteCallback={ _deleteNote }
            highlightObject={ obj }
            markerData={ that.props.markerObject[ obj.markerId ] }
            key={ obj.syncId }
          />
        )
        
      }

    })
    return listArray;
  }
  // @TODO: DRY this up
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
    const { highlightArray, markerObject } = this.props;
    let that = this;
    return (
      <div className={ hlCSS['highlightWrap'] }>
        <div className={ hlCSS['sidebarWrap'] }>
          <div className={ hlCSS['sidebar'] }>
            <div className={ hlCSS['sidebarSection'] }>
              <div className={ hlCSS['sidebarTitle'] }>Filter Annotations</div>
              <div className={ hlCSS['optionsWrap'] }>
                <ul style={{ marginBottom: '16px'}}>
                  { 
                    Object.keys(markerObject).map(function(key,i){
                      const obj = markerObject[ key ];
                      let _isSelected = that.state.selectedMarkers[ obj.globalId ];
                      return(
                        <li key={ obj.globalId } style={{ display: 'table', color: (_isSelected === false ? 'inherit' : obj.vstColor) }}>
                          <span className={ hlCSS['tableCell'] }>
                            <MarkerOrb noX={true} className={ hlCSS['markerOrb'] } markerColor={ obj.vstColor } globalId={ obj.globalId } clickFunc={ that._filterMarkers } isSelected={ _isSelected !== false } />
                          </span>
                          <span className={ hlCSS['markerLabel'] }>
                            { obj.label }
                          </span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className={ hlCSS['sidebarSection'] }>
              <SidebarChecklist 
                title='Type' 
                optionsArray={ ['Notes','Highlights','Bookmarks'] }
                optionsData={ this.state.selectedFilters }
                cb={ this._filterAnnotations }
              />
            </div>
          </div>
        </div>
        <div className={ hlCSS['listArray'] }>
          { this._renderList( highlightArray )}
        </div>
      </div>
    )
  }
}
HighlightList.defaultProps = {
  highlightArray: [],
  markerObject: {},
}
HighlightList.propTypes = {
  highlightArray: PropTypes.array.isRequired,
  markerObject: PropTypes.object.isRequired,
  manipulateHighlight: PropTypes.func,
};

export default HighlightList;