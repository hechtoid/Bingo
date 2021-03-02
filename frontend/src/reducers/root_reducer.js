import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import lists from './lists_reducer';


const RootReducer = combineReducers({
  errors,
  session,
  ui,
  lists
});

export default RootReducer;
