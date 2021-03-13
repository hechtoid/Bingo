import { getUserWordLists, postWordList, putWordList, deleteWordList } from '../util/word_list_api_util';

export const RECEIVE_USER_WORD_LISTS = "RECEIVE_USER_WORD_LISTS";
export const RECEIVE_NEW_WORD_LIST = "RECEIVE_NEW_WORD_LIST";
export const REMOVE_WORD_LIST = "REMOVE_WORD_LIST";

export const receiveUserWordLists = lists => ({
  type: RECEIVE_USER_WORD_LISTS,
  lists
});

export const receiveNewWordList = wordList => ({
  type: RECEIVE_NEW_WORD_LIST,
  wordList
})

export const removeOldWordList = id => ({
  type: REMOVE_WORD_LIST,
  id
})

export const fetchUserWordLists = id => dispatch => (
  getUserWordLists(id)
    .then(lists => dispatch(receiveUserWordLists(lists)))
    .catch(err => console.log(err))
);

export const saveWordList = data => dispatch => (
  postWordList(data)
    .then(res => dispatch(receiveNewWordList(res)))
    .catch(err => console.log(err))
);
export const editWordList = data => dispatch => (
  putWordList(data)
    .then(res => dispatch(receiveNewWordList(res)))
    .catch(err => console.log(err))
);

export const removeWordList = id => dispatch => (
  deleteWordList(id)
  .then( () => dispatch(removeOldWordList(id)))
  .catch(err => console.log(err))
);