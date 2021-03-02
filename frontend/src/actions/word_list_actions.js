import { getUserWordLists, postWordList } from '../util/word_list_api_util';

export const RECEIVE_USER_WORD_LISTS = "RECEIVE_USER_WORD_LISTS";
export const RECEIVE_NEW_WORD_LIST = "RECEIVE_NEW_WORD_LIST";

export const receiveUserWordLists = lists => ({
  type: RECEIVE_USER_WORD_LISTS,
  lists
});

export const receiveNewWordList = wordList => ({
  type: RECEIVE_NEW_WORD_LIST,
  wordList
})

export const fetchUserWordLists = id => dispatch => (
  getUserWordLists(id)
    .then(lists => dispatch(receiveUserWordLists(lists)))
    .catch(err => console.log(err))
);

export const saveWordList = data => dispatch => (
  postWordList(data)
    .then(wordList => dispatch(receiveNewWordList(wordList)))
    .catch(err => console.log(err))
);

