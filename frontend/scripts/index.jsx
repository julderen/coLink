import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Registration from './pages/registration/store/Registration';
import Authorization from './pages/authorization/store/Authorization';
import App from './pages/App';

const store = {
  registration: Registration,
  authorization: Authorization,
};

render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'),
);
