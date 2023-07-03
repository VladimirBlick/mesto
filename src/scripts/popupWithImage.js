import popup from './Popup.js'

export default class PopupWithImage extends popup {
  constructor (popupSelector){
    super(popupSelector);
    this._popupImage =this._popup.querySelector('.popup-image__container');
    this._imagePopupSignature = this._popup.querySelector('.popup-image__signature');
  }

  open = (cardData) => {

    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.title;
    this._imagePopupSignature.textContent = cardData.title;
    super.open()
  }
}


//