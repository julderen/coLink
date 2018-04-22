import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import signInReducer from './SignInReducer';
import RegistrationReducer from './RegistrationReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  signIn: signInReducer,
  registration: RegistrationReducer
});

export default rootReducer;
