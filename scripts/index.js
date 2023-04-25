
//переменные для ПОПАПА (имя, работа)
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupOpenBtn = document.querySelector('.profile__popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


//переменные для КАРТОЧКИ
const сard = document.querySelector('.popup-card');
const cardOpenBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup-card__close-btn');
const cardCreateBtn = document.querySelector('.popup-card__btn');
const cardInputName = document.querySelector('.popup-card__input_name');
const cardInputImageLink = document.querySelector('.popup-card__input_image');
const cardContainer = document.querySelector('.popup-card__container');

//лайк КАРТОЧКИ
const cardLike = document.querySelector('.element__city-like');

//функция лайк карточки
function like() {
  cardLike.classList.toggle('element__city-like_active');
  console.log('sdfsf');
}

//слушатель лайк карточки
//cardLike.addEventListener('click', like);

//открытие и закрытие КАРТОЧКИ
function openCard() {
  сard.classList.add('popup-card_opened');
}

function closeCard() {
  сard.classList.remove('popup-card_opened');
}

//добавление данных из инпута КАРТОЧКИ в массив
function newCard() {
 const newElement = {
  name: cardInputName.value,
  link: cardInputImageLink.value
};
initialCards.splice (0,0, newElement);
const element = templateElement.content.cloneNode(true).querySelector('.element');

// Заполняем элемент данными из массива initialCards
element.querySelector('.element__image').src = newElement.link;
element.querySelector('.element__image').alt = newElement.name;
element.querySelector('.element__city-name').textContent = newElement.name;

// Добавляем элемент внутрь контейнера elementsContainer
elementsContainer.appendChild(element);

}

function handleCardSubmit(evt) {
  evt.preventDefault();
  newCard();
  closeCard();

}

cardContainer.addEventListener('submit', handleCardSubmit);





//Шесть карточек «из коробки» и добавление новых
let initialCards = [
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

//ДОБАВЛЕНИЕ КАРТОЧКИ
  // Получаем элементы из DOM

  const templateElement = document.getElementById('card-template');
  const elementsContainer = document.querySelector('.elements');

  initialCards.forEach(function(card){
 // Создаем новый элемент на основе шаблона
 const element = templateElement.content.cloneNode(true).querySelector('.element');

 // Заполняем элемент данными из массива initialCards
 element.querySelector('.element__image').src = card.link;
 element.querySelector('.element__image').alt = card.name;
 element.querySelector('.element__city-name').textContent = card.name;

 // Добавляем элемент внутрь контейнера elementsContainer
 elementsContainer.appendChild(element);
  });

//функции ПОПАП (имя, работа)
function openPopup() {
  popup.classList.add('popup_opened');
  popupInputJob.value = profileJob.textContent;
  popupInputName.value = profileName.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileJob.textContent = popupInputJob.value;
  closePopup();
}



//слушатели для ПОПАП (имя, работа)
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', handleFormSubmit);

//слушатели для КАРТОЧКИ
cardOpenBtn.addEventListener('click', openCard);
cardCloseBtn.addEventListener('click', closeCard);


//Добавить данные из инпутов в карточку

//Форма добавления карточки
//Добавление карточки

//Лайк карточки



//Удаление карточки
//Открытие попапа с картинкой
