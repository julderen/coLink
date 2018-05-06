import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

const Modal = ({ center, hiddenClose, hiddenHeader, isOpen, title, className, children, footer, onToggle, ...others }) => (
  <Container {...others} show={isOpen} className={classNames(className, { center })} onHide={onToggle}>
    {hiddenHeader ? null : (
      <Header closeButton={!hiddenClose}>
        {title ? <Title>{title}</Title> : null}
      </Header>
    )}
    <Body>
      {children}
    </Body>
    {footer ? <Footer>{footer}</Footer> : null}
  </Container>
);

Modal.propTypes = {
  center: PropTypes.bool,
  isOpen: PropTypes.bool,
  hiddenClose: PropTypes.bool,
  hiddenHeader: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.element,
  onToggle: PropTypes.func
};

Modal.defaultProps = {
  center: false,
  hiddenClose: false,
  hiddenHeader: false
};

export default Modal;
