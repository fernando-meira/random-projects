import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Repositories } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/repositories/:repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
