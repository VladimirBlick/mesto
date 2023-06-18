import initialcards from './scripts/initialcards.js'
import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import popupWithImage from './scripts/popupWithImage.js'
import Section from './scripts/section.js'
import userInfo from './scripts/userInfo.js'
import popupWithForm from './scripts/popupWithForm.js'


//переменные для профайл попапа
const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = document.querySelector('.popup-profile__form');
const profilePopupOpenBtn = document.querySelector('.profile__popup-profile');
const profilePopupCloseBtn = document.querySelector('.popup-profile__close-btn');
const profilePopupInputName = document.querySelector('#name');
const profilePopupInputJob = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


//переменные для фото попапа
const imagePopup = document.querySelector('.popup-image');
const elementImage = document.querySelector('.popup-image__container');
const elementCityName = document.querySelector('.popup-image__signature');
const imageCloseBtn = document.querySelector('.popup-image__close-btn');

//переменные для карточки попапа
const popupCard = document.querySelector('.popup-card');
const cardOpenBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup-card__close-btn');
const cardInputName = document.querySelector('#place');
const cardInputImageLink = document.querySelector('#url');
const cardForm = document.querySelector('.popup-card__form');
const popupCloseBtn = document.querySelectorAll('#popupCloseBtn')


const sectionElements = document.querySelector('.elements');
const popupSelectorProfile = '.popup-profile'
const popupSelectorImage = '.popup-image'

const popupSelectorCard = '.popup-card'

const sectionElementsSelector = '.elements'

const configProfile = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
}
const userinfo = new userInfo(configProfile);


// конфиг валидации
const validatorConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorSelectorTemplate: '.popup__error_',
  disableButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  textErrorClass: 'popup__error_visible'
};




const popupImage = new popupWithImage(popupSelectorImage);
popupImage.setEventListener()

//экземпляр класса для профайл попапа
const profilePopupValidator = new FormValidator(validatorConfig, profilePopupForm)
profilePopupValidator.enableValidation();

//экземпляр класса для карточки попапа
const cardPopupValidator = new FormValidator(validatorConfig, cardForm)
cardPopupValidator.enableValidation();


//открытие и закрытие попапов
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('click', handleClosePopup);
//   document.addEventListener('keydown', closePopupEsc);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('click', handleClosePopup);
//   document.removeEventListener('keydown', closePopupEsc);
// }

const openProfileForm = () => {
   profilePopupValidator.resetValidationState();
  // profilePopupInputName.value = profileName.textContent;
  // profilePopupInputJob.value = profileJob.textContent;
  // openPopup(profilePopup);
  popupProfile.setInputValue(userinfo.getUserInfo());
  popupProfile.open();
}



function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;
  popupProfile.close();
}

// const handleClosePopup = (evt) => {
//   const isOverlay = evt.target.classList.contains('popup');
//   const closeBtn = evt.target.classList.contains('popup__close-btn');

//   if (isOverlay || closeBtn) {
//     const popupOpened = document.querySelector('.popup_opened');
//     // закрыть найденный открытый popup, если такой есть
//     if (popupOpened) {
//       closePopup(popupOpened);
//     }
//   }
// };

// const closePopupEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     if (popupOpened) {
//       closePopup(popupOpened);
//     }
//   }
// };

// function handleCardSubmit(evt) {
//   evt.preventDefault();
//   closePopup(popupCard);
//   const newElement = {
//     title: cardInputName.value,
//     link: cardInputImageLink.value,
//   };
//   const cardMarkup = createNewCard(newElement);
//   addCardToContainer(cardMarkup);
// }

const selectorTemplate = '#card-template'

// функция для открытия попапа с картинкой
// function openImagePopup(cardData) {
//   elementCityName.textContent = cardData.name;
//   elementImage.src = cardData.link;
//   elementImage.alt = 'фотография недоступна';
//   openPopup(imagePopup)
// }



// добавление карточки в тот контейнер, который нам нужен
// function addCard(container, card) {
//   container.append(card);
// }

// дефолтные карточки из массива
// initialcards.forEach(element => {
//   addCard(sectionElements, createNewCard(element))
// });

// function createNewCard(cardData) {
//   const element = new Card(cardData, selectorTemplate, popupImage.open);
//   const cardElement = element.createCard();
//   return cardElement;
// }

const section = new Section({
  items:initialcards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    return card.createCard();
  }
}, sectionElementsSelector)

section.addCardFromArray()

const popupProfile = new popupWithForm(popupSelectorProfile, (evt) =>{
  evt.preventDefault();
  userinfo.setUserInfo(popupProfile.getInputValue())
  popupProfile.close();
})

popupProfile.setEventListener()

 const popupAddCard = new popupWithForm(popupSelectorCard, (evt) =>{
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValue()))
  popupAddCard.close();
 })
 popupAddCard.setEventListener();

 const openCardForm = () => {
  cardPopupValidator.resetValidationState();
  cardForm.reset();
  popupAddCard.open();
}

// function addCardToContainer(cardMarkup) {
//   sectionElements.prepend(cardMarkup);
// }


// //слушатели для профайл попапа
profilePopupOpenBtn.addEventListener('click', () => openProfileForm(profilePopup));
// profilePopupCloseBtn.addEventListener('click', () => closePopup(profilePopup));
// profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// //слушатели для карточки попапа
cardOpenBtn.addEventListener('click', () => openCardForm(popupCard));
// cardCloseBtn.addEventListener('click', () => closePopup(popupCard));
// cardForm.addEventListener('submit', handleCardSubmit);

// //слушатели для фото попапа
// imageCloseBtn.addEventListener('click', () => closePopup(imagePopup));

// popupCloseBtn.forEach ((element) =>{
//   const popupBtn = element.closest('.popup')
//   element.addEventListener('click', () =>{
//     closePopup(popup);
//   })
// })
