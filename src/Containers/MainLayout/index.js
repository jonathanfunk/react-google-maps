import React, { Component } from 'react';
import HeaderBar from './../../Components/Header';
import SimpleMapPage from './../GoogleMaps';
import './styles.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <SimpleMapPage />
      </div>
    );
  }
}

export default MainLayout;
