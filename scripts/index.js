const openPopupBtn = document.querySelector('.profileInfo__popUp_open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupBtn = document.querySelector('.popup__btn');

function togglePopup() {
  popup.classList.toggle('popup_open');
}

openPopupBtn.addEventListener('click', togglePopup);
popupCloseBtn.addEventListener('click', togglePopup);

document.querySelector('.popup__btn').addEventListener('click', myClick);

function myClick() {
  const changeName = document.querySelector('.popup__input-name').value;
  document.querySelector('.profileInfo__name').innerHTML = changeName;
  const changeJob = document.querySelector('.popup__input-job').value;
  document.querySelector('.profileInfo__job').innerHTML = changeJob;
}

popupBtn.addEventListener('click', togglePopup);

const profileName = document.querySelector('.profileInfo__name');
const inputName = document.querySelector('.popup__input-name');
inputName.value = profileName.textContent;

const profileJob = document.querySelector('.profileInfo__job');
const inputJob = document.querySelector('.popup__input-job');
inputJob.value = profileJob.textContent;

const formElement = document.querySelector('.popup__form');

document.querySelector('.popup__input-name');
document.querySelector('.popup__input-job');

function handleFormSubmit(evt) {
  evt.preventDefault();
}

formElement.addEventListener('submit', handleFormSubmit);
