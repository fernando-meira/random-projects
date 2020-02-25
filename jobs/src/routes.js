import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Cart } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      {/* <Route path="/" component={Cart} /> */}
    </Switch>
  );
}
