import { RECEIVE_OUTFITS, RECEIVE_USER_OUTFITS, RECEIVE_NEW_OUTFIT } from '../actions/outfit_actions';
import merge from 'lodash/merge';

  const OutfitsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_OUTFITS:
        newState.all = action.outfits.data;
        return newState;
      case RECEIVE_USER_OUTFITS:
        newState.user = action.outfits.data;
        return newState;
      case RECEIVE_NEW_OUTFIT:
        newState = merge({}, state);
        newState.user = [action.outfit.data, ...newState.user]
        return newState;
      default:
        return state;
    }
  };
  
  export default OutfitsReducer;