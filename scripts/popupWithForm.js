import popup from './popup.js'

export default class popupWithForm extends popup {
  constructor(popupSelector, submit){
super(popupSelector);
this._submit = submit;
this._form = this._popup.querySelector('.popup__form');
this._inputList = this._form.querySelectorAll('.popup__input');
  }

getInputValue () {
  this._values = {};
  this._inputList.array.forEach(input => {
    this._values[input.name] = input._value
  })
  return this._values;
}

setInputValue (dataUser) {
this._inputList.forEach(input => {
  input.value = dataUser[input.name];
})
}

setEventListener()
{
  super.setEventListener();
  this._form.addEventListener('submit', this._submit)
}

  close(){
    super.close();
    this._form.reset();
  }
}