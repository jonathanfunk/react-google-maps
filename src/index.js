import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './Containers/MainLayout';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './mui-theme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <MainLayout />
    </MuiThemeProvider>,
    document.getElementById('root')
);
