import React from 'react';
import ParkingFilter from './../../Components/ParkingFilter'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


export default class ParkingFilterList extends React.Component {

  render() {
    return (
      <Toolbar>
        <ToolbarTitle text="Parking Space Filters" />
        <div 
          style={{
            width: '500px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          {this.props.filters.map(item =>
            <ParkingFilter
              id={item.get('id')}
              key={item.get('id')}
              changeFilter={this.props.changeFilter}
            />
          )}
        </div>
      </Toolbar>
    )
  }
}
