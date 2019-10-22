import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Contract from './pages/Contract';
import Preview from './pages/Preview';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/contract" component={Contract} />
      <Route path="/preview" component={Preview} />
    </Switch>
  );
}
