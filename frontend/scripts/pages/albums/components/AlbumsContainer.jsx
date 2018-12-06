import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { Button } from 'components/controls';

import UserLink from './Link';
import UserAlbum from './Album';
import PlusIcon from '../../../../files/plus.svg';

const AlbumContainer = () => {
  return (
    <div className="albums__container">
      <div className="albums__controls">
        <Button className="albums__button albums__button--link">
          <ReactSVG src={PlusIcon} svgClassName="albums__icon" />
        </Button>
        <Button className="albums__button albums__button--album">
          <ReactSVG src={PlusIcon} svgClassName="albums__icon" />
        </Button>
      </div>
      <UserAlbum />
      <UserLink className="albums__link" />
      <UserLink className="albums__link albums__link--1" />
      <UserLink className="albums__link albums__link--3" />
      <UserLink className="albums__link albums__link--2" />
    </div>
  );
};

AlbumContainer.propTypes = {
  data: PropTypes.array,
};

export default AlbumContainer;
