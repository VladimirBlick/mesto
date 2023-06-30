export default class Section{
constructor({renderer}, containerSelector){
  this._container = document.querySelector(containerSelector);
  this._renderer = renderer;
}

addCardFromArray(dataCard){
  dataCard.forEach(element => {
   this._renderer(element);
  });
}

addItemPrepend(elementFromDom) {
  this._container.prepend(elementFromDom);
}

addItemAppend(elementFromDom) {
  this._container.append(elementFromDom);
}
}