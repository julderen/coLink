import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Registration from './pages/signUp/store/SignUpStore';
import Authorization from './pages/signIn/store/SignInStore';
import Albums from './pages/albums/store/AlbumsStore';
import App from './pages/App';

const store = {
  registration: Registration,
  authorization: Authorization,
  albums: Albums,
};

render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'),
);
