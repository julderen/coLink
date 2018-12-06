import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { Button } from 'components/controls';

import EditIcon from '../../../../files/edit.svg';
import DeleteIcon from '../../../../files/delete.svg';

const Link = ({ className }) => {
  return (
    <div className={classNames('link', className)}>
      <h2 className="link__title">Название ссылки</h2>
      <img className="link__favicon" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/youtube.png" />
      <p className="link__description">Описание ссылки выфафпафы уп фывпфы впфывпфывпфывп фывп фыфып фы</p>
      <div className="link__control">
        <Button className="link__button">
          <ReactSVG src={EditIcon} svgClassName="link__icon" />
        </Button>
        <Button className="link__button">
          <ReactSVG src={DeleteIcon} svgClassName="link__icon" />
        </Button>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
