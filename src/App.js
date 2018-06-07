import React, { Component } from 'react';
import AppBar from './AppBar';
import SimpleMap from './SimpleMap';
import './map.css';

class App extends Component {

  state = {
    markers: [],
    zoom: 13,
  }

  onSuggestionSelected = (selection) => {
    if(!this.state.markers.includes(selection)) {
      this.setState({ markers: [...this.state.markers, selection]})
      console.log(selection.label + ' added');
    } else {
      console.log(selection.label + ' already added!');
    }
  }

  onUndoMarker = () => {
    const markers = this.state.markers;
    const updatedMarkers = markers.slice(markers.length, markers.length);
    console.log('undo',)
    
    this.setState({ markers: updatedMarkers })    
  }

  onClearMarkers = () => {
    this.setState({ markers: [] })
  }

  render() {
    return (
      <div id="app">
        <AppBar 
          onSuggestionSelected={this.onSuggestionSelected}
          onUndoMarker={this.onUndoMarker}
          onClearMarkers={this.onClearMarkers}
        />
        <SimpleMap markers={this.state.markers}/>
      </div>
    );
  }
}

export default App;
