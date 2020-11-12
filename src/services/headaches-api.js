import tokenService from '../services/tokenService';
const BASE_URL = '/api/headaches/';

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {"Authorization": "Bearer " + tokenService.getToken()}
  }, {mode: "cors"})
  .then(res => {res.json()})
}

export function create(headache) {
  return fetch(BASE_URL, {
    method: "POST", 
    headers: {'content-type': 'application/json', "Authorization": "Bearer " + tokenService.getToken() },
    body: JSON.stringify(headache)
  }, {mode: 'cors'})
      .then(res => res.json());
}

export function getAll() {
  console.log('wtfffff')
  return fetch(BASE_URL, {
    headers: {'content-type': 'application/json', "Authorization": "Bearer " + tokenService.getToken() },
  }, {mode: "cors"})
  .then(res => res.json())
}