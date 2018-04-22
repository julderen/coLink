import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const defaultMapStateToProps = name => store => (
  _.isArray(name) ?
    _.reduce(name, (result, path) => ({ ...result, ..._.get(store, path) }), {}) :
    { ..._.get(store, name) }
);

const connectToStore = ({ mapStateToProps, mapDispatchToProps, name, actions }) => (
    connect(
      mapStateToProps ||
      (name && defaultMapStateToProps(name)) ||
      (() => ({})),
      mapDispatchToProps || (actions && (dispatch => ({ actions: bindActionCreators(actions, dispatch) })))
    )
);

const connectToForm = ({ name, validation, options }) => (
  reduxForm({ form: name, validate: validation, enableReinitialize: true, ...options })
);

export { connectToStore, connectToForm, compose };
