import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class HeaderBar extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="React Google Maps"
        />
      </div>
    );
  }
}

export default HeaderBar;