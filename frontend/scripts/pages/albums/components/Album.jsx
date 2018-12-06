import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { Button } from 'components/controls';

import EditIcon from '../../../../files/edit.svg';
import DeleteIcon from '../../../../files/delete.svg';

const Album = ({ className }) => {
  return (
    <div className={classNames('album', className)}>
      <h2 className="album__title">Название альбома</h2>
      <p className="album__description">Описание альбома выфафпафы уп фывпфы впфывпфывпфывп фывп фыфып фы</p>
      <div className="album__control">
        <Button className="album__button">
          <ReactSVG src={EditIcon} svgClassName="album__icon" />
        </Button>
        <Button className="album__button">
          <ReactSVG src={DeleteIcon} svgClassName="album__icon" />
        </Button>
      </div>
    </div>
  );
};

Album.propTypes = {
  className: PropTypes.string,
};

export default Album;
