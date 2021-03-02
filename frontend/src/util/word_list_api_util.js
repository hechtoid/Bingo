import axios from 'axios';


export const getUserWordLists = id => {
  return axios.get(`/api/wordlists/user/${id}`)
};

export const postWordList = data => {
  return axios.post('/api/wordlists/', data)
}


