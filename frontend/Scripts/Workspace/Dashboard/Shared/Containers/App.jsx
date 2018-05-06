import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../Components/Layout';
import AlbumsView from '../../Pages/Albums/Containers/View';
import LinksView from '../../Pages/Links/Containers/View';
import UserProvider from './UserProvider';

const EconomicsApp = () => {
  const path = '/Dashboard';

  return (
    <Layout>
      <UserProvider>
        <Route
          exact
          path={path}
          render={() => <Redirect to={`${path}/Albums`} />}
        />
        <Route path={`${path}/Albums`} component={AlbumsView} />
        <Route path={`${path}/Links/:albumId/:albumName`} component={LinksView} />
      </UserProvider>
    </Layout>
  );
};

export default EconomicsApp;
