export default class Api {
  constructor(options){
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }


  getInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then (res => res.ok ? res.json() : Promise.reject)
  }

getCards(){
  return fetch (`${this._url}/cards`, {
headers:{
  authorization: this._authorization
}} )

.then(res => res.ok ? res.json() : Promise.reject)
}
}