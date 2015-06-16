import React from 'react';
import TapPlugin from 'react-tap-event-plugin';
import MainView from './components/main-view';
import About from './components/about'
import Dog from './components/dog'
import Cat from './components/cat'
import Other from './components/other'
import LeftNavi from './components/left-navi'
import Info from './components/info'

(function() {

  window.React = React;
  TapPlugin();
  var Router = require('react-router');
  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;
  var DefaultRoute = Router.DefaultRoute;
  var Redirect = Router.Redirect;



  // declare our routes and their hierarchy
  var routes = (
    <Route handler={MainView}>
      <DefaultRoute handler={Dog}/>
      <Route name="cat" handler={Cat} />
      <Route name="other" handler={Other} />
      <Route name="dog" handler={Dog} />
      <Route name="info" handler={Info} />

    </Route>
  );


  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
  });

  //React.render( < MainView / > , document.body);
})();
