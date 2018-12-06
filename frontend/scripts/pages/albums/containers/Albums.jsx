import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Layout from 'components/layout/Layout';

import AlbumContainer from '../components/AlbumsContainer';

@inject(['albums'])
@observer
class Albums extends Component {
  componentDidMount() {
    const { albums } = this.props;

    albums.fetchAlbums();
  }

  render() {
    return (
      <Layout className="albums">
        <h1 className="albums__title">Главная</h1>
        <AlbumContainer />
        <AlbumContainer />
      </Layout>
    );
  }
}

Albums.propTypes = {
  albums: PropTypes.shape({
    fetchAlbums: PropTypes.func,
  }),
};

export default Albums;
