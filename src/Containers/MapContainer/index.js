import React from 'react';
import * as config from './config'
import GoogleApiComponent from './../../Components/GoogleApiComponent'
import ParkingMap from './../../Components/ParkingMap'
import {Marker} from './../../Components/Marker'
import {InfoWindow} from './../../Components/InfoWindow'
import {SearchBox} from './../../Components/SearchBox'

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <ParkingMap google={this.props.google}>
          {this.props.markers.map(marker =>
            <Marker
              key={marker.get('title')}
              title={marker.get('title')}
              description={marker.get('description')}
              properties={marker.get('properties')}
              position={marker.get('position')}
              mapOn={marker.get('mapOn')}
              addMarker={this.props.addMarker}
              onMarkerClick={this.props.onMarkerClick}/>

          )}
          <InfoWindow {...this.props}
              marker={this.props.activeMarker}
              visible={this.props.showingInfoWindow}>
                <div>
                  <h4>{this.props.selectedTitle}</h4>
                </div>
            </InfoWindow>
        </ParkingMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
