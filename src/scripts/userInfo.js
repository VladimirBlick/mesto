export default class UserInfo{
  constructor(configProfile){

this._profileName = document.querySelector(configProfile.profileNameSelector);
this._profileJob = document.querySelector(configProfile.profileJobSelector);
this._profileAvatar = document.querySelector(configProfile.profileAvatarSelector)
  }

  getUserInfo(){
    return {name: this._profileName.textContent, job: this._profileJob.textContent}
  }

  setUserInfo({username, job, avatar}) {
    this._profileName.textContent = username;
    this._profileJob.textContent = job;
    this._profileAvatar.src = avatar;
  }
}