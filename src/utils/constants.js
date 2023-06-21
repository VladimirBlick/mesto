//переменные для профайл попапа
const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = document.querySelector('.popup-profile__form');
const profilePopupOpenBtn = document.querySelector('.profile__popup-profile');

//переменные для карточки попапа
const popupCard = document.querySelector('.popup-card');
const cardOpenBtn = document.querySelector('.profile__add-button');
const cardForm = document.querySelector('.popup-card__form');

//остальные переменные
const popupSelectorProfile = '.popup-profile'
const popupSelectorImage = '.popup-image'
const popupSelectorCard = '.popup-card'
const selectorTemplate = '#card-template'
const sectionElementsSelector = '.elements'

const configProfile = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
}

// конфиг валидации
const validatorConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorSelectorTemplate: '.popup__error_',
  disableButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  textErrorClass: 'popup__error_visible'
};

const initialcards = [
  {
    title: 'Омск',
    link: 'https://images.unsplash.com/photo-1653828030585-1aa093033717',
  },
  {
    title: 'Новосибирск',
    link: 'https://images.unsplash.com/photo-1564502045820-95ee6fb9d7de'
  },
  {
    title: 'Москва',
    link: 'https://images.unsplash.com/photo-1513326738677-b964603b136d'
  },
  {
    title: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173'
  },
  {
    title: 'Калининград',
    link: 'https://images.unsplash.com/photo-1621707098150-3c0b7de2c3ef'
  },
  {
    title: 'Рязань',
    link: 'https://images.unsplash.com/photo-1664277132722-b6340560eda9'
  }
];

export{
  profilePopup,
  profilePopupForm,
  profilePopupOpenBtn,
  popupCard,
  cardOpenBtn,
  cardForm,
  popupSelectorProfile,
  popupSelectorImage,
  popupSelectorCard,
  selectorTemplate,
  sectionElementsSelector,
  configProfile,
  validatorConfig,
  initialcards
}