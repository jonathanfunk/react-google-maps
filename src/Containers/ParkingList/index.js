import React from 'react';
import ParkingListItem from './../../Components/ParkingListItem'
import { GridList } from 'material-ui/GridList';
import './styles.css';

const styles = {
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height: '100%',
    padding: '10px',
  },
};

export default class ParkingList extends React.Component {
  getParkingLot() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  render() {
    return (
      <div className="root">
        <GridList style={styles.gridList}>
          {this.getParkingLot().map(item =>
            <ParkingListItem {...this.props}
              key={item.get('title')}
              title={item.get('title')}
              image={item.get('image')}
              url={item.get('url')}
              position={item.get('position')}
              description={item.get('description')}
            />
          )}
        </GridList>
      </div>
    )
  }
}
