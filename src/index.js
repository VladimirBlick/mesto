import initialcards from './scripts/initialcards.js'
import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import popupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import userInfo from './scripts/userInfo.js'
import popupWithForm from './scripts/popupWithForm.js'
import './pages/index.css'

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

const userinfo = new userInfo(configProfile);
const popupImage = new popupWithImage(popupSelectorImage);

//экземпляр класса для профайл попапа
const profilePopupValidator = new FormValidator(validatorConfig, profilePopupForm)
profilePopupValidator.enableValidation();

//экземпляр класса для карточки попапа
const cardPopupValidator = new FormValidator(validatorConfig, cardForm)
cardPopupValidator.enableValidation();


const section = new Section({
  items: initialcards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    return card.createCard();
  }
}, sectionElementsSelector)

section.addCardFromArray()

const popupProfile = new popupWithForm(popupSelectorProfile, (evt) => {
  evt.preventDefault();
  userinfo.setUserInfo(popupProfile.getInputValue())
  popupProfile.close();
})

const popupAddCard = new popupWithForm(popupSelectorCard, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValue()))
  popupAddCard.close();
})

const openProfileForm = () => {
  profilePopupValidator.resetValidationState();
  popupProfile.setInputValue(userinfo.getUserInfo());
  popupProfile.open();
}

const openCardForm = () => {
  cardPopupValidator.resetValidationState();
  cardForm.reset();
  popupAddCard.open();
}

popupProfile.setEventListener();
popupAddCard.setEventListener();
popupImage.setEventListener();

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));

//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));

