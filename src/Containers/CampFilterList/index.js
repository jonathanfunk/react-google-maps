import React from 'react';
import CampFilter from './../../Components/CampFilter'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


export default class CampFilterList extends React.Component {

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
            <CampFilter
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
