import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class ParkingFilter extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Checkbox
          label={this.props.id}
          className="toggle"
          id={this.props.id}
          defaultChecked={this.props.inuse}
          onClick={() => this.props.changeFilter(this.props.id)}
        />
      </div>
    )
  }
}
