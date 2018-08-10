import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Registration from 'registration/store/Registration';
import App from './pages/App';

const store = {
  registration: Registration,
};

render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'),
);
