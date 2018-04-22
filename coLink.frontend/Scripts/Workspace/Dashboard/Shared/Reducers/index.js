import UserReducer from './UserReducer';
import SearcherReducer from './SearcherReducer';

const rootReducer = {
  user: UserReducer,
  searcher: SearcherReducer
};

export default rootReducer;
