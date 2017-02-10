import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import * as actionCreators from './../../Redux/action_creators';
import './App.css';
import ParkingFilterList from './../ParkingFilterList';
import ParkingList from './../ParkingList';
import MapContainer from './../MapContainer';

export class ParkingFilterApp extends React.Component {

  render() {
    return (
      <div className="appContainer">
        <AppBar
          title="Parking Space"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <ParkingFilterList {...this.props} />
        <MapContainer {...this.props} />
        <ParkingList {...this.props} />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const ParkingFilterAppContainer = connect(mapStateToProps, actionCreators)(ParkingFilterApp);
