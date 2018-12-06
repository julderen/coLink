import React from 'react';
import { Switch, Route } from 'components/controls';

import Home from './Home';
import Albums from './albums/containers/Albums';
import Registration from './signUp/containers/View';
import Authorization from './signIn/containers/View';
import NotFound from './NotFound';

import '../../styles/index.less';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Album" component={Albums} />
    <Route path="/Registration" component={Registration} />
    <Route path="/Login" component={Authorization} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
