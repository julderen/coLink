import AppService from 'Services/AppService';

import reducers from './Reducers';
import Layout from './Components/Layout';

import '../../Styles/Account/index.scss';

new AppService({
  container: Layout,
  reducers,
  DOMNode: document.getElementById('root')
}).init();
