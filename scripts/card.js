class Card {
  constructor (cardData, selectorTemplate, openImagePopup) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
  }

  _cloneTemplale() {
  // const template = document.querySelector(this._selectorTemplate).content.querySelector('element').cloneNode(true);
  return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);
  }

  _handleLike = () => {
    this._elementCityLike.classList.toggle('element__city-like_active');
  }

  _handleDelete = () => {
    this._cloneElement.remove();
  };

  _handleOpenImage = () => {
    this._openImagePopup(this._cardData);
  };

  _setEventListeners(){
    this._elementCityLike.addEventListener('click', this._handleLike);
    this._elementCityDelete.addEventListener('click', this._handleDelete);
    this._elementImage.addEventListener('click', this._handleOpenImage);
  }
  createCard(){
    this._cloneElement = this._cloneTemplale();
    this._elementImage = this._cloneElement.querySelector('.element__image');
    this._elementCityLike = this._cloneElement.querySelector('.element__city-like');
    this._elementCityDelete = this._cloneElement.querySelector('.element_delete');
    this._elementCityName = this._cloneElement.querySelector('.element__city-name');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementCityName.textContent = this._name;
    this._setEventListeners();
    return this._cloneElement; 
  }
  }

  export default Card;