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

  loadMap() {
    const {google} = this.props;
    const map = google.maps;
    if (this.props && this.props.google) {
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 11;
      let lat = 49.2827291;
      let lng = -123.12073750000002;
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
        <div style={style} ref='map'>
          {this.renderChildren()}
          Loading map...
        </div>
    )
  }
}
