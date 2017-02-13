import React from 'react';
import { Card } from 'material-ui/Card';

const styles = {
  card: {
    width: '500px',
    minHeight: '100%',
    padding: '20px',
    margin: '20px',
  },
  img: {
    width: '100%',
  }
}

export default class ParkingListItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      let img_ref = this.refs.cg_image
      if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
        img_ref.style.border = "3px solid black"
      }
      else {
        img_ref.style.border = null
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
        ref="cg_image" 
        style={styles.card}
      >
        <img 
          src={this.props.image} 
          alt="Parkingground" 
          style={styles.img} 
          onClick={() => this.props.onMarkerClick(this.getMarker(this.props.title))}>
        </img>
      </Card>
    )
  }
}

