import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../Store';

import '../../../Styles/Common/index.scss';

class AppService {
  constructor({ container, reducers, DOMNode }) {
    this.store = configureStore(reducers);
    this.container = container;
    this.DOMNode = DOMNode;
  }

  init() {
    this.clearLoader();
    this.unmount();
    this.render();
  }

  clearLoader() {
    this.container.innerHTML = '';
  }

  unmount() {
    unmountComponentAtNode(this.DOMNode);
  }

  render() {
    const { container: App, store, DOMNode } = this;

    /* eslint "react/jsx-filename-extension": 0 */

    render((
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ), DOMNode);
  }
}

export default AppService;
