import { getTops, getUserTops, writeTop, postWordList } from '../util/top_api_util';

export const RECEIVE_TOPS = "RECEIVE_TOPS";
export const RECEIVE_USER_TOPS = "RECEIVE_USER_TOPS";
export const RECEIVE_NEW_TOP = "RECEIVE_NEW_TOP";
export const RECEIVE_NEW_WORD_LIST = "RECEIVE_NEW_WORD_LIST";

export const receiveTops = tops => ({
  type: RECEIVE_TOPS,
  tops
});

export const receiveUserTops = tops => ({
  type: RECEIVE_USER_TOPS,
  tops
});

export const receiveNewTop = top => ({
  type: RECEIVE_NEW_TOP,
  top
})
export const receiveNewWordList = wordList => ({
  type: RECEIVE_NEW_WORD_LIST,
  wordList
})

export const fetchTops = () => dispatch => (
  getTops()
    .then(tops => dispatch(receiveTops(tops)))
    .catch(err => console.log(err))
);

export const fetchUserTops = id => dispatch => (
  getUserTops(id)
    .then(tops => dispatch(receiveUserTops(tops)))
    .catch(err => console.log(err))
);

export const composeTop = data => dispatch => (
  writeTop(data)
    .then(top => dispatch(receiveNewTop(top)))
    .catch(err => console.log(err))
);

export const saveWordList = data => dispatch => (
  postWordList(data)
    .then(wordList => dispatch(receiveNewWordList(wordList)))
    .catch(err => console.log(err))
);

