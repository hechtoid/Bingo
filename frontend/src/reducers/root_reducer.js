import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import tops from './tops_reducer';


const RootReducer = combineReducers({
  errors,
  session,
  ui,
  tops
});

export default RootReducer;
