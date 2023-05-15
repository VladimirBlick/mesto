//переменные для профайл попапа
const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = document.querySelector('.popup-profile__form');
const profilePopupOpenBtn = document.querySelector('.profile__popup-profile');
const profilePopupCloseBtn = document.querySelector('.popup-profile__close-btn');
const profilePopupInputName = document.querySelector('#name');
const profilePopupInputJob = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupOpened = document.querySelector('.popup_opened');

//переменные для фото попапа
const imagePopup = document.querySelector('.popup-image');
const imagePopupContainer = document.querySelector('.popup-image__container');
const imagePopupSignature = document.querySelector('.popup-image__signature');
const imageCloseBtn = document.querySelector('.popup-image__close-btn');

//переменные для карточки попапа
const popupCard = document.querySelector('.popup-card');
const cardOpenBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup-card__close-btn');
const cardInputName = document.querySelector('#place');
const cardInputImageLink = document.querySelector('#linkImage');
const cardForm = document.querySelector('.popup-card__form');

const template = document.getElementById('card-template');
const sectionElements = document.querySelector('.elements');
const popupAll = Array.from(document.querySelectorAll('.popup'));

//открытие и закрытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', handleClosePopup);
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', handleClosePopup);
  document.removeEventListener('keydown', closePopupEsc);
}

const openProfileForm = () => {
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputJob.value = profileJob.textContent;
  activateButton(profilePopup.querySelector('.popup__button'), { inactiveButtonClass: 'popup__button_disabled' });
  openPopup(profilePopup);
}

const openCardForm = () => {
  cardForm.reset();
  passiveButton(popupCard.querySelector('.popup__button'), { inactiveButtonClass: 'popup__button_disabled' });
  openPopup(popupCard);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;
  closePopup(profilePopup);
}

const handleClosePopup = (evt) => {
  const overlay = evt.target.classList.contains('popup');
  const closeBtn = evt.target.classList.contains('popup__close-btn');

  if (overlay || closeBtn) {
    const popupOpened = document.querySelector('.popup_opened');
    // закрыть найденный открытый popup, если такой есть
    if (popupOpened) {
      closePopup(popupOpened);
    }
  }
};

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    if (popupOpened) {
      closePopup(popupOpened);
    }
  }
};

function handleCardSubmit(evt) {
  evt.preventDefault();
  closePopup(popupCard);
  createNewCard();
}

//карточка попап
const createElement = (cardData) => {
  const cardElement = template.content.querySelector('.element').cloneNode(true);

  const elementImage = cardElement.querySelector('.element__image');
  const elementCityName = cardElement.querySelector('.element__city-name');
  const elementCityLike = cardElement.querySelector('.element__city-like');
  const elementCityDelete = cardElement.querySelector('.element_delete');

  elementCityName.textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = 'фотография недоступна';

  //открытие и закрытие фотки
  elementImage.addEventListener('click', function () {
    //  всплывающее окно
    openPopup(imagePopup)
    // Обновление содержимого всплывающего окна
    imagePopupContainer.src = cardData.link;
    imagePopupContainer.alt = 'фотография недоступна';
    imagePopupSignature.textContent = cardData.name;
  });

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = () => {
    elementCityLike.classList.toggle('element__city-like_active');
  }

  elementCityLike.addEventListener('click', handleLike);
  elementCityDelete.addEventListener('click', handleDelete);

  return cardElement;
};

initialcards.forEach((card) => {
  const element = createElement(card);

  sectionElements.append(element);
});

function createNewCard() {
  const newElement = {
    name: cardInputName.value,
    link: cardInputImageLink.value,
  };

  const element = createElement(newElement);
  sectionElements.prepend(element);

  const cardForm = document.querySelector('.popup-card__form');
  cardForm.reset();
}

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));
profilePopupCloseBtn.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));
cardCloseBtn.addEventListener('click', () => closePopup(popupCard));
cardForm.addEventListener('submit', handleCardSubmit);

//слушатели для фото попапа
imageCloseBtn.addEventListener('click', () => closePopup(imagePopup));
imagePopup.addEventListener('click', () => closePopup(imagePopup));