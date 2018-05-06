import AppService from 'Services/AppService';

import reducers from './Reducers';
import App from './Shared/Containers/App';

import '../../../Styles/Workspace/Dashboard/index.scss';

new AppService({
  container: App,
  reducers,
  DOMNode: document.getElementById('root')
}).init();
