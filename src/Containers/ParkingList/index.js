import React from 'react';
import ParkingListItem from './../../Components/ParkingListItem'
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '20px',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
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
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
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