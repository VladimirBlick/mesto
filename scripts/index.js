//Попап для изменения имени и работы (практическая №4)
//переменные для пр4
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container')
const openPopupBtn = document.querySelector('.profile__popup');
const closePopupeBtn = document.querySelector('.popup__close-btn');
const submitBtn = document.querySelector('.popup__btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

//переменные для пр5
const cityLike = document.querySelector('element__city-like');

//функции для пр4
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

//слушатели для пр4
openPopupBtn.addEventListener('click', openPopup);
closePopupeBtn.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', handleFormSubmit);

//Шесть карточек «из коробки»
//Форма добавления карточки
//Добавление карточки

//Лайк карточки



//Удаление карточки
//Открытие попапа с картинкой
