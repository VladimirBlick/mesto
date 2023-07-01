import popup from './Popup.js'

export default class PopupWithForm extends popup {
  constructor(popupSelector, submit){
super(popupSelector);
this._submit = submit;
this._form = this._popup.querySelector('.popup__form');
this._inputList = this._form.querySelectorAll('.popup__input');
this._submitButton = this._popup.querySelector('.popup__button');
this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputValue () {
  this._values = {};
  this._inputList.forEach(input => {
    this._values[input.name] = input.value;
  })
  return this._values;
}

setInputValue (dataUser) {
this._inputList.forEach(input => {
  input.value = dataUser[input.name];
})
}

setEventListener(){
  super.setEventListener();
  this._form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    this._submitButton.textContent = 'Сохранение...';
    this._submit(this._getInputValue());
  })
}

setupDefaultText() {
  this._submitButton.textContent = this._defaultButtonText;
}

  close(){
    super.close();
    this._form.reset();
  }
}