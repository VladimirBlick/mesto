import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import PopupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import UserInfo from './scripts/userInfo.js'
import PopupWithForm from './scripts/popupWithForm.js'
import './pages/index.css'

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

const userinfo = new UserInfo(configProfile);
const popupImage = new PopupWithImage(popupSelectorImage);

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

const popupProfile = new PopupWithForm(popupSelectorProfile, (evt) => {
  evt.preventDefault();
  userinfo.setUserInfo(popupProfile.getInputValue())
  popupProfile.close();
})

const popupAddCard = new PopupWithForm(popupSelectorCard, (evt) => {
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
  // cardForm.reset();
  popupAddCard.open();
}

popupProfile.setEventListener();
popupAddCard.setEventListener();
popupImage.setEventListener();

//слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));

//слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));

