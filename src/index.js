import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './Styles/mui-theme';
import { store } from './Redux/store'
import { ParkingFilterAppContainer } from './Containers/ParkingFilterApp';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './Styles/index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ParkingFilterAppContainer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
