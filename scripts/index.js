//попап имя, работа
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const openPopupBtn = document.querySelector('.profile__popup');
const closePopupBtn = document.querySelector('.popup__close-btn');
const submitBtn = document.querySelector('.popup__btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

//добавление карточки
const popupCard = document.querySelector('.popup-card');
const openPopupCardBtn = document.querySelector('.profile__add-button');
const closePopupCardBtn = document.querySelector('.popup-card__close-btn');
const createBtn = document.querySelector('.popup-card__btn');
const cardName = document.querySelector('.profile__name');
const imageLink = document.querySelector('.profile__job');

//лайк карточки
const cardLike = document.querySelector('.element__city-like');

//функции попап имя, работа
function openPopup() {
  popup.classList.add('popup_opened');
  inputJob.value = profileJob.textContent;
  inputName.value = profileName.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

//функция лайк карточки
function like () {
  cardLike.classList.toggle('element__city-like_active')
}

//функции попап карточка
function openPopupCard() {
  popupCard.classList.add('popup-card_opened');
  //inputJob.value = profileJob.textContent;
  //inputName.value = profileName.textContent;
}

function closePopupCard() {
  popupCard.classList.remove('popup-card_opened');
}

function handleFormCreate(evt) {
  evt.preventDefault();
  //profileName.textContent = inputName.value;
  //profileJob.textContent = inputJob.value;
  closePopupCard();
}

//слушатель лайк карточки
cardLike.addEventListener('click', like);

//слушатели для попап имя, работа
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', handleFormSubmit);

//слушатели для попап карточка
openPopupCardBtn.addEventListener('click', openPopupCard);
closePopupCardBtn.addEventListener('click', closePopupCard);
popupCardContainer.addEventListener('submit', handleFormCreate);



//Шесть карточек «из коробки»
//Форма добавления карточки
//Добавление карточки

//Лайк карточки



//Удаление карточки
//Открытие попапа с картинкой
