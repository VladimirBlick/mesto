import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import PopupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import UserInfo from './scripts/userInfo.js'
import PopupWithForm from './scripts/popupWithForm.js'
// import './pages/index.css'

import {
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
} from './utils/constants.js'

const popupAvatarSelector = '.popup-update'
const avatarOpenBtn = document.querySelector('.profile__overlay');
const popupAvatar = document.querySelector('.popup-update');
const avatarForm = document.querySelector('.popup-update__form');

const userinfo = new UserInfo(configProfile);
const popupImage = new PopupWithImage(popupSelectorImage);

//экземпляр класса для профайл попапа
const profilePopupValidator = new FormValidator(validatorConfig, profilePopupForm)
profilePopupValidator.enableValidation();

//экземпляр класса для карточки попапа
const cardPopupValidator = new FormValidator(validatorConfig, cardForm)
cardPopupValidator.enableValidation();

//экземпляр класса для аватар попапа
const avatarPopupValidator = new FormValidator(validatorConfig, avatarForm)
avatarPopupValidator.enableValidation();

function creatNewCard (element){
  const card = new Card(element, selectorTemplate, popupImage.open);
  return card.createCard();
}

const section = new Section({
  items: initialcards,
  renderer: (element) => {
    section.addItem(creatNewCard(element))
  }
}, sectionElementsSelector)

section.addCardFromArray()

const popupProfile = new PopupWithForm(popupSelectorProfile, (data) => {
  userinfo.setUserInfo(data)
})

const popupAddCard = new PopupWithForm(popupSelectorCard, (data) => {
  section.addItem(creatNewCard(data))

})

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) =>{
document.querySelector('.profile__avatar').src = data.avatar;
})

const openProfileForm = () => {
  profilePopupValidator.resetValidationState();
  popupProfile.setInputValue(userinfo.getUserInfo());
  popupProfile.open();
}

const openCardForm = () => {
  cardPopupValidator.resetValidationState();
  popupAddCard.open();
}

const openAvatarForm = () => {
  avatarPopupValidator.resetValidationState();
  popupEditAvatar.open();
}

popupProfile.setEventListener();
popupAddCard.setEventListener();
popupImage.setEventListener();
popupEditAvatar.setEventListener();

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));

//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));

//слушатели для аватар попапа
avatarOpenBtn.addEventListener('click', () => openAvatarForm(popupAvatar));

// document.querySelector('.profile__overlay').addEventListener('click',() =>{
//   popupEditAvatar.open()

// })