export default class Card {
  constructor(cardData, selectorTemplate, openImagePopup, openDeletePopup, workLike) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._myId = cardData.myId;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._workLike = workLike;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;

  }

  _cloneTemplate() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);
  }

  _handleLike = () => {
    this._workLike(this._elementCityLike, this._cardId);
  };

  _handleDelete = () => {
    this._openDeletePopup({card: this, cardId: this._cardId});
  };

  _handleOpenImage = () => {
    this._openImagePopup(this._cardData);
  };

  _setEventListeners() {
    this._elementCityLike.addEventListener('click', this._handleLike);
    this._elementCityDelete.addEventListener('click', this._handleDelete);
    this._elementImage.addEventListener('click', this._handleOpenImage);
  }

  removeCard() {
    this._cloneElement.remove();
  }

  _visibleTrashButtonIcon() {
    if (this._myId === this._ownerId) {
    } else {
      if (this._elementCityDelete) {
        this._elementCityDelete.remove();
      }
    }
  }

  _checkLike() {
    this._likes.forEach(element => {
      if (element._id === this._myId) {
        this._elementCityLike.classList.add('element__city-like_active');
      }
    });
    this._likesCounter.textContent = this._likesLength;
  }

toggleLike(likes){
  this._elementCityLike.classList.toggle('element__city-like_active');
  this._likesCounter.textContent = likes.length
}

  createCard() {
    this._cloneElement = this._cloneTemplate();
    this._elementImage = this._cloneElement.querySelector('.element__image');
    this._elementCityLike = this._cloneElement.querySelector('.element__city-like');
    this._elementCityDelete = this._cloneElement.querySelector('.element_delete');
    this._elementCityName = this._cloneElement.querySelector('.element__city-name');
    this._likesCounter = this._cloneElement.querySelector('.element__city-like-counter');
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
    this._elementCityName.textContent = this._cardData.name;
    this._visibleTrashButtonIcon();
    this._setEventListeners();
    this._checkLike();
    return this._cloneElement;
  }
}