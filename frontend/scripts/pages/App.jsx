import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Album from './Album';
import Catalog from './Catalog';
import Registration from './registration/containers/View';
import Authorization from './authorization/containers/View';
import NotFound from './NotFound';
import Layout from './Layout';

import '../../styles/index.scss';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Album" component={Album} />
      <Route path="/Catalog" component={Catalog} />
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Authorization} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
