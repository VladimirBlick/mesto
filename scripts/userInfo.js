export default class userInfo{
  constructor(configProfile){
  
this._profileName = document.querySelector(configProfile._profileNameSelector);
this._profileJob = document.querySelector(configProfile._profileJobSelector);
  }

  getUserInfo(){
    return {name: this._profileName.textContent, job: this._profileJob.textContent}
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.job;
  }
}