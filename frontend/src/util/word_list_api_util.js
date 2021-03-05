import axios from 'axios';


export const getUserWordLists = id => {
  return axios.get(`/api/wordlists/user/${id}`)
};

export const getWordList = id => {
  return axios.get(`/api/wordlists/${id}`)
}

export const postWordList = data => {
  return axios.post('/api/wordlists/', data)
}
export const deleteWordList = id => {
  return axios.delete(`/api/wordlists/${id}`)
}
