import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import DashBoard from './containers/DashBoard';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    )
  }
}


export default withRouter(App);
