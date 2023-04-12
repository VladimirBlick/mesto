const openPopupBtn = document.querySelector('.profile__popup_opened');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupBtn = document.querySelector('.popup__btn');

function togglePopup() {
  popup.classList.toggle('popup_opened');
  const profileName = document.querySelector('.profile__name');
  const inputName = document.querySelector('.popup__input_type_name');
  inputName.value = profileName.textContent;
}

openPopupBtn.addEventListener('click', togglePopup);
popupCloseBtn.addEventListener('click', togglePopup);

const submitBtn = document.querySelector('.popup__btn').addEventListener('click', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  const changeName = document.querySelector('.popup__input_type_name').value;
  document.querySelector('.profile__name').innerHTML = changeName;
  const changeJob = document.querySelector('.popup__input_type_job').value;
  document.querySelector('.profile__job').innerHTML = changeJob;
  togglePopup();
}



const profileJob = document.querySelector('.profile__job');
const inputJob = document.querySelector('.popup__input_type_job');
inputJob.value = profileJob.textContent;

const formElement = document.querySelector('.popup__form');

document.querySelector('.popup__input_type_name');
document.querySelector('.popup__input_type_job');



formElement.addEventListener('submit', handleFormSubmit);
