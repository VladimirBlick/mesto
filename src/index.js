import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import PopupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import UserInfo from './scripts/userInfo.js'
import PopupWithForm from './scripts/popupWithForm.js'
import PopupDeleteCard from './scripts/popupDeleteCard.js'
import Api from './scripts/api.js'
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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'e03d7410-18b9-44d3-a520-a37d81ed7110',
    'Content-Type': 'application/json'
  }
})


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
  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open, (elementCityLike, cardId) => {
if (elementCityLike.classList.contains('element__city-like_active')){
  api.deleteLike(cardId)
  .then(res =>{
    card.toggleLike(res.likes)
  })
  .catch((error => console.log(`ошибка при снятии лайка ${error}`)))
} else {
  api.addLike(cardId)
  .then(res =>{
    card.toggleLike(res.likes)
  })
  .catch((error => console.log(`ошибка при добавлении лайка ${error}`)))
}
  });
  return card.createCard();
}

const section = new Section({
  renderer: (element) => {
    section.addItem(creatNewCard(element))
  }
}, sectionElementsSelector)

const popupProfile = new PopupWithForm(popupSelectorProfile, (data) => {
  api.setUserInfo(data)
  .then (res => {userinfo.setUserInfo({username: res.name, job: res.about, avatar: res.avatar})
  popupProfile.close()
  })
  .catch((error => console.log(`ошибка редактрирования профиля ${error}`)))
  .finally(() => popupProfile.setupDefaultText())
})

const popupAddCard = new PopupWithForm(popupSelectorCard, (data) => {
  Promise.all ([api.getInfo(), api.addCard(data)])
  .then(([dataUser, dataCard]) => {
  dataCard.myId = dataUser._id
section.addItem(creatNewCard(dataCard))
popupAddCard.close()
})
.catch((error => console.log(`ошибка создания карточки ${error}`)))
  .finally(() => popupAddCard.setupDefaultText())
})

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) =>{
api.setAvatar(data)
.then (res => {userinfo.setUserInfo({username: res.name, job: res.about, avatar: res.avatar})
popupEditAvatar.close()
})
.catch((error => console.log(`ошибка обновления фотки аватара ${error}`)))
.finally(() => popupEditAvatar.setupDefaultText())
})

const deleteCardPopup = new PopupDeleteCard (popupDeleteSelector, ({card, cardId}) =>{
  api.deleteCard(cardId)
  .then(() => {
    card.removeCard()
    deleteCardPopup.close();
  })
  .catch((error => console.log(`ошибка при удалении карточки ${error}`)))
  .finally(() => popupProfile.setupDefaultText())
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

Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) => {
dataCard.forEach(element => element.myId = dataUser._id)
userinfo.setUserInfo({username: dataUser.name, job: dataUser.about, avatar:dataUser.avatar})
section.addCardFromArray(dataCard)
})
