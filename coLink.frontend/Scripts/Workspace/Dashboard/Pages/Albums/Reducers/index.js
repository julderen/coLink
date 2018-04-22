import ViewReducer from './ViewReducer';
import CreateFormReducer from './CreateFormReducer';
import EditFormReducer from './EditFormReducer';

const rootReducer = {
  albums: ViewReducer,
  albumEdit: EditFormReducer,
  albumCreate: CreateFormReducer,
};

export default rootReducer;
