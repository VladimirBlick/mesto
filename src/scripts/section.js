export default class Section{
constructor({items, renderer}, containerSelector){
  this._container = document.querySelector(containerSelector);
  this._items = items;
  this.renderer = renderer;
}

addCardFromArray(){
  this._items.forEach(element => {
    this.addItem(this.renderer(element));
  });
}

addItem(elementFromDom) {
  this._container.prepend(elementFromDom);
}
}