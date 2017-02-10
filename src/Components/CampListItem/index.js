import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class CampListItem extends React.Component {
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
    let latlng_str = parseFloat(this.props.position.first()).toFixed(3) + "," + parseFloat(this.props.position.last()).toFixed(3)
    let maps_url = "http://www.google.com/maps?q=" + latlng_str
    //let img_url = "http://campnear.me/react_app_images/" + this.props.image
    return (
      <GridTile
        actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        title={this.props.title}
      >
        <img 
          src={this.props.image} 
          alt="campground" 
          ref="cg_image" 
          style={{ width: 200, height: 100 }} 
          onClick={() => this.props.onMarkerClick(this.getMarker(this.props.title))}>
        </img>
      </GridTile>
    )
  }
}

