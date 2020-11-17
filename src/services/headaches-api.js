import tokenService from '../services/tokenService';
const BASE_URL = '/api/headaches/';

export function update(headache) {
  return fetch(`${BASE_URL}${headache._id}`, {
    method: "PUT",
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(headache)
  }, {mode: 'cors'})
  .then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
  }, {mode: 'cors'})
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
  return fetch(BASE_URL, {
    headers: {'content-type': 'application/json', "Authorization": "Bearer " + tokenService.getToken() },
  }, {mode: "cors"})
  .then(res => res.json())
}