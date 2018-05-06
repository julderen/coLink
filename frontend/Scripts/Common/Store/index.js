import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk-fsa';
import { createLogger } from 'redux-logger';

import { ajaxMiddleware } from '../Middlewares';

const configureStore = (reducers, initialState) => (
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        ajaxMiddleware,
        createLogger({ collapsed: true })
      )
    )
  )
);

export default configureStore;
