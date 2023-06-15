export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    // this._popupCloseButton = document.querySelector('#popupCloseBtn');
    this._popupCloseButton = this._popup.querySelector('#popupCloseBtn')
  }


  _handleClosePopup = (evt) =>  {
    const isOverlay = evt.target.classList.contains('popup');
      const closeBtn = evt.target.classList.contains('#popupCloseBtn');

      if (isOverlay || closeBtn) {
        const popupOpened = document.querySelector('.popup_opened');
        this.close()}
  }

  _closePopupEsc = (evt) =>  {
    if (evt.key === 'Escape') {
      this.close()
      }
  }

  _handleCloseButton = () =>  {
    this.close()
    //console.log('123');
  }


  setEventListener() {
    this._popupCloseButton.addEventListener('click', this._handleCloseButton);
    this._popup.addEventListener('click', this._handleClosePopup);
  }

open(){
  this._popup.classList.add('popup_opened');
  document.addEventListener('click', this._handleClosePopup);
  document.addEventListener('keydown', this._closePopupEsc);
}
close(){
  this._popup.classList.remove('popup_opened');
  document.removeEventListener('click', this._handleClosePopup);
  document.removeEventListener('keydown', this._closePopupEsc);
}
}