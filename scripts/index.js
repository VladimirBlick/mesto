//переменные для профайл попапа
const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = document.querySelector('.popup-profile__form');
const profilePopupOpenBtn = document.querySelector('.profile__popup-profile');
const profilePopupCloseBtn = document.querySelector('.popup-profile__close-btn');
const profilePopupInputName = document.querySelector('.popup-profile__input_type_name');
const profilePopupInputJob = document.querySelector('.popup-profile__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupOpened = document.querySelector('.popup_opened');

//переменные для фото попапа
const imagePopup = document.querySelector('.popup-image');
const imagePopupContainer = document.querySelector('.popup-image__container');
const imagePopupSignature = document.querySelector('.popup-image__signature');
const imageCloseBtn = document.querySelector('.popup-image__close-btn');

//переменные для карточки попапа
const сard = document.querySelector('.popup-card');
const cardOpenBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup-card__close-btn');
const cardInputName = document.querySelector('.popup-card__input_name');
const cardInputImageLink = document.querySelector('.popup-card__input_image');
const cardForm = document.querySelector('.popup-card__form');

const template = document.getElementById('card-template');
const sectionElements = document.querySelector('.elements');

profilePopupInputJob.value = profileJob.textContent;
profilePopupInputName.value = profileName.textContent;

//открытие и закрытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  closePopup(profilePopup);
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;
}

function handlecardSubmit(evt) {
  evt.preventDefault();
  closePopup(сard);
  newcard();
}

//Шесть карточек «из коробки» и добавление новых
const initialcards = [
  {
    name: 'Омск',
    link: 'https://images.unsplash.com/photo-1653828030585-1aa093033717',
  },
  {
    name: 'Новосибирск',
    link: 'https://images.unsplash.com/photo-1564502045820-95ee6fb9d7de'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1513326738677-b964603b136d'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173'
  },
  {
    name: 'Калининград',
    link: 'https://images.unsplash.com/photo-1621707098150-3c0b7de2c3ef'
  },
  {
    name: 'Рязань',
    link: 'https://images.unsplash.com/photo-1664277132722-b6340560eda9'
  }
];

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
    imagePopup.classList.add('popup_opened');
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

function newcard() {
  const newElement = {
    name: cardInputName.value,
    link: cardInputImageLink.value,
  };

  const element = createElement(newElement);
  sectionElements.prepend(element);

  document.querySelector('.popup-card__form').reset();
}

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openPopup(profilePopup));
profilePopupCloseBtn.addEventListener('click', () => closePopup(profilePopup));
profilePopup.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', handleFormSubmit);


//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openPopup(сard));
cardCloseBtn.addEventListener('click', () => closePopup(сard));
сard.addEventListener('click', () => closePopup(сard));
cardForm.addEventListener('submit', handlecardSubmit);

//слушатели для фото попапа
imageCloseBtn.addEventListener('click', () => closePopup(imagePopup));
imagePopup.addEventListener('click', () => closePopup(imagePopup));