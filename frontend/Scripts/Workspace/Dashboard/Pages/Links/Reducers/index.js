import ViewReducer from './ViewReducer';
import CreateFormReducer from './CreateFormReducer';

const rootReducer = {
  links: ViewReducer,
  linkCreate: CreateFormReducer
};

export default rootReducer;
