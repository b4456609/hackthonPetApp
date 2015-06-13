import React      from 'react';
import MUI        from 'material-ui';
import AppBar     from './app-bar';
import LeftNavi   from './left-navi';
import TextCard   from './text-card';
import ImageCard  from './image-card';
import ChartCard  from './chart-card';
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

const AppCanvas = MUI.AppCanvas;

export default React.createClass({



    render() {
        return (
          <AppCanvas predefinedLayout={1}>
            <AppBar onMenuIconTapped={this.toggleLeftNavi}>
            </AppBar>
            <LeftNavi ref="leftNav" />
              <RouteHandler/>
          </AppCanvas>
        );
    },

    toggleLeftNavi() {
        this.refs.leftNav.toggle();
    }
});
