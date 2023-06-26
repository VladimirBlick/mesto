import popup from './popup.js'

export default class PopupDeleteCard extends popup{
  constructor(popupSelector, submit ){
    super(popupSelector);
    this._submit = submit;

  }

  setEventListener(){
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    this._submit(this._element);
    })
  }

  open = (element) =>{
    super.open();
    this._element = element;
  }
}

