import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const renderMarker = (marker) => {      
    return (
        <Marker key={marker.label} position={[marker.lat, marker.lng]}>
            <Popup>
                {marker.label}
            </Popup>
        </Marker>        
    )
  }

export default class SimpleMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const {lat, lng, zoom} = this.state;
    const position = [lat, lng];
    return (
      <Map center={position} zoom={zoom} id="mapid">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        { this.props.markers.map((marker) => renderMarker(marker)) }

      </Map>
    )
  }
}