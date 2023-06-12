import popup from './popup.js'

export default class popupWithImage extends popup {
  constructor (popupSelector){
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-image__container');
    this._imagePopupSignature = this._popup.querySelector('.popup-image__signature');
  }

  open = (cardData) => {
    this._popupImag.src = cardData.link;
    this._popupImag.alt = cardData.name;
    this._imagePopupSignature.textContent = cardData.name;
    super.open()
  }
}