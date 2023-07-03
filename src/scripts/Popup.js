export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popupCloseBtn');
    this._handleClosePopup = this._handleClosePopup.bind(this); // привязываем контекст к функции
    this._closePopupEsc = this._closePopupEsc.bind(this);// привязываем контекст к функции
    this._document = document;
  }

  _handleClosePopup(evt) {
    const isOverlay = evt.target.classList.contains('popup');
    const closeBtn = evt.target.classList.contains('popupCloseBtn');

    if (isOverlay || closeBtn) {
      this.close();
    }
  }

  _closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleCloseButton() {
    this.close();
  }

  setEventListener() {
    this._popupCloseButton.addEventListener('click', this._handleCloseButton.bind(this));
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('click', this._handleClosePopup);
    this._document.addEventListener('keydown', this._closePopupEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('click', this._handleClosePopup);
    this._document.removeEventListener('keydown', this._closePopupEsc);
  }
}

//
