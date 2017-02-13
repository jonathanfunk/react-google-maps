import React from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const styles = {
  card: {
    width: '500px',
    minHeight: '100%',
    margin: '10px',
  },
}

export default class ParkingListItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      let img_ref = this.refs.cg_image
      if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
        img_ref.style.backgroundColor = '#E8E8E8'
      }
      else {
        img_ref.style.backgroundColor = 'white'
      }
    }
  }

  getMarker(title_match) {
    let match_list = this.props.gmapMarkers.filter(item =>
      item.get('title') === title_match
    )
    if (match_list) {
      return match_list.first()
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <Card
        style={styles.card}
        onClick={() => this.props.onMarkerClick(this.getMarker(this.props.title))}
      > 
        <div className="listImage">
          <img src={this.props.image} alt={this.props.title}>
          </img>
        </div>
        <div className="listDetails" ref="cg_image">  
          <p>$100</p>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <RaisedButton label="Book" primary={true} />
        </div>
      </Card >
    )
  }
}

