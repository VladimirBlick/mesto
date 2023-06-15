import popup from './popup.js'

export default class popupWithImage extends popup {
  constructor (popupSelector){
    super(popupSelector);
    this._popupImage = document.querySelector('.popup-image__container');
    this._imagePopupSignature = document.querySelector('.popup-image__signature');
  }

  open = (cardData) => {

    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.title;
    this._imagePopupSignature.textContent = cardData.title;
    super.open()
  }
}
