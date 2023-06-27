import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import PopupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import UserInfo from './scripts/userInfo.js'
import PopupWithForm from './scripts/popupWithForm.js'
import PopupDeleteCard from './scripts/popupDeleteCard.js'
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
  initialcards,
  popupAvatarSelector,
  avatarOpenBtn,
  popupAvatar,
  avatarForm,
  popupDeleteSelector
} from './utils/constants.js'

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

//экземпляр класса для попапа удаления карточки
const deleteCardPopup = new PopupDeleteCard (popupDeleteSelector, (element) =>{
  element.removeCard();
  deleteCardPopup.close();
})

function creatNewCard (element){
  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open);
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
deleteCardPopup.setEventListener();

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));

//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));

//слушатели для аватар попапа
avatarOpenBtn.addEventListener('click', () => openAvatarForm(popupAvatar));

