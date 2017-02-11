import React from 'react';
import ReactDOM from 'react-dom';

export default class ParkingMap extends React.Component {

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google
     });
   })
  }
  
  onSubmit(e) {
    e.preventDefault();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.forceUpdate();
   }
  }

  // called after the component renders
  loadMap() {
    const {google} = this.props;
    const map = google.maps;
    if (this.props && this.props.google) {
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let autocomplete = new google.maps.places.Autocomplete(node);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        const center =  map.setCenter(place.geometry.location);
        const zoom =  map.setZoom(17);
      }
    })

      //Old stuff
      let zoom = 10;
      let lat = 42.9456;
      let lng = -122.2;
      const center = new map.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new map.Map(node, mapConfig);
    }
}

  render() {
    const style = {
      minWidth: '400px',
      minHeight: '400px'
    }
    return (
      <div>
      <form onSubmit={this.onSubmit}>
            <input
              ref='map'
              type="text"
              placeholder="Enter a location" />
            <input
              type='submit'
              value='Go' />
          </form>
        <div style={style} ref='map'>
          {this.renderChildren()}
          Loading map...
        </div>
      </div>
    )
  }
}
