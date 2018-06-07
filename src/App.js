import React, { Component } from 'react';
import AppBar from './AppBar';
import SimpleMap from './SimpleMap';
import './map.css';

class App extends Component {

  state = {
    markers: [],
    zoom: 13,
  }

  componentDidMount() {
    let url = new URL(window.location.href); 
    let searchParams = new URLSearchParams(url.search.slice(1));
    const lats = [];
    const lngs = [];
    const combined = [];

    for(let pair of searchParams.entries()) {
      if (pair[0].startsWith('lat')) lats.push(pair[1])
      if (pair[0].startsWith('lng')) lngs.push(pair[1])
      console.log(pair[0]+ ', '+ pair[1]);
    }

    for (let i = 0; i < lats.length; i++) { 
      combined.push({label: `Item ${i+1}`, lat: lats[i], lng: lngs[i]})
    }

    this.setState({ markers: combined})

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
