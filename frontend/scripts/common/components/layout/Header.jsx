import React from 'react';
import PropTypes from 'prop-types';

const LayoutHeader = () => {
  return (
    <div className="header">
      <div className="header__searcher">
        Поиск
      </div>
      <div className="header__profile">
        <img src="https://www.pravmir.ru/wp-content/uploads/2018/07/218fa74f-34a5-41e4-9b77-10a22419ddf0-bestSizeAvailable.png" />
      </div>
    </div>
  );
};

export default LayoutHeader;
