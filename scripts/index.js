
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

//Шесть карточек «из коробки» и добавление новых
const initialCards = [
  {
    name: 'Омск',
    link: 'https://images.unsplash.com/photo-1653828030585-1aa093033717'
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

/*const cardTemplate = document.getElementById('card-template');
const elements = document.querySelector('.elements');

const createCard = function cardData (){
 const cardElements = cardTemplate.content.querySelector('.element').cloneNode(true);
 const elementImage = cardElements.querySelector('.element__image');
 const elementCityName = cardElements.querySelector('.element__city-name');
 elementImage.src = initialCards.link
 elementCityName.textContent = initialCards.name

 return cardElements;
}

initialCards.forEach(function(element)) =*/

  // Получаем элементы из DOM
  const templateElement = document.getElementById('card-template');
  const elementsContainer = document.querySelector('.elements');

  initialCards.forEach(function(card) {
    // Создаем новый элемент на основе шаблона
    const element = templateElement.content.cloneNode(true).querySelector('.element');

console.log(card.link);
    // Заполняем элемент данными из массива ·initialCards`
    element.querySelector('.element__image').src = card.link;
    element.querySelector('.element__image').alt = card.name;
    element.querySelector('.element__city-name').textContent = card.name;

    // Добавляем элемент внутрь контейнера `elementsContainer`
    elementsContainer.appendChild(element);
  });

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
  cardLike.classList.toggle('element__city-like_active');
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
//cardLike.addEventListener('click', like);

//слушатели для попап имя, работа
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', handleFormSubmit);

//слушатели для попап карточка
openPopupCardBtn.addEventListener('click', openPopupCard);
closePopupCardBtn.addEventListener('click', closePopupCard);
popupCardContainer.addEventListener('submit', handleFormCreate);




//Форма добавления карточки
//Добавление карточки

//Лайк карточки



//Удаление карточки
//Открытие попапа с картинкой
