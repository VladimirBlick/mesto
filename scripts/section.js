export default class section{
constructor({items, renderer}, containerSelector){
  this._container = document.querySelector(containerSelector);
  this._initialcards = items;
  this._renderer = renderer;
}

addCardFromArray(){
  this._initialcards.forEach(element => {
    this.addItem(this._renderer(element));
  });
}

addItem(elementFromDom) {
  this._container.prepend(elementFromDom)
}
}