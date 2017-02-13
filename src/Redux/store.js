import {createStore} from 'redux';
import { features } from './../mock-data'//Temporary!!!
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// convert json into dict for use by the React components
// add mapOn variable to indicate if the marker should be visible
// by default, set mapOn to false, filtering will indicate if it should be true
function get_campgrounds(features) {
  let campgrounds = []
  features.forEach(feature => {
    campgrounds.push({
      'title' : feature['properties']['title'],
      'description' : feature['properties']['description'],
      'position' : [feature['geometry']['coordinates'][1],
      feature['geometry']['coordinates'][0]],
      'properties': feature['properties'],
      'image': feature['properties']['image'],
      'url': feature['properties']['url'],
      'mapOn': true
    })
  });
  return campgrounds
}

set_state(get_campgrounds(features))

function set_state(campgrounds) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'shower', inuse: false },
      {id: 'pets', inuse: false },
      {id: 'flush', inuse: false },
      {id: 'water', inuse: false }
    ],
    markers: campgrounds,
    gmapMarkers: [],
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: ""
  }
 })
}