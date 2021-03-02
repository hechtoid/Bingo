import { RECEIVE_NEW_WORD_LIST, RECEIVE_USER_WORD_LISTS } from '../actions/word_list_actions';
import merge from 'lodash/merge';

  const WordListsReducer = (state = { all: {}, user: {}, new: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_USER_WORD_LISTS:
        newState.user = action.lists.data;
        return newState;
      case RECEIVE_NEW_WORD_LIST:
        newState = merge({}, state);
        newState.user = [action.wordList.data, ...newState.user]
        return newState;
      default:
        return state;
    }
  };
  
  export default WordListsReducer;