import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Album from './Album';
import Catalog from './Catalog';
import Registration from './Registration';
import NotFound from './NotFound';

import '../../styles/Home.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Album" component={Album} />
      <Route path="/Catalog" component={Catalog} />
      <Route path="/Registration" component={Registration} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
