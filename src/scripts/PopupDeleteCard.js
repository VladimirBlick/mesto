import popup from './Popup.js'

export default class PopupDeleteCard extends popup{
  constructor(popupSelector, submit ){
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListener(){
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    this._submit({card: this._element, cardId: this._cardId});
    })
  }

  open = ({card, cardId}) =>{
    super.open();
    this._element = card;
    this._cardId = cardId;
  }
}

//
