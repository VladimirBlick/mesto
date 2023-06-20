export default class userInfo{
  constructor(configProfile){

this._profileName = document.querySelector(configProfile.profileNameSelector);
this._profileJob = document.querySelector(configProfile.profileJobSelector);
  }

  getUserInfo(){
    return {name: this._profileName.textContent, job: this._profileJob.textContent}
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.job;
  }
}