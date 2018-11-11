import React from 'react';
import { Switch, Route } from 'components/controls';

import Home from './Home';
import Album from './Album';
import Catalog from './Catalog';
import Registration from './sign-up/containers/View';
import Authorization from './sign-in/containers/View';
import NotFound from './NotFound';
import Layout from './Layout';

import '../../styles/index.less';

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
