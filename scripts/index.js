const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__popup');
const closePopupeBtn = document.querySelector('.popup__close-btn');
const submitBtn = document.querySelector('.popup__btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

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
}

openPopupBtn.addEventListener('click', openPopup);
closePopupeBtn.addEventListener('click', closePopup);
submitBtn.addEventListener('click', handleFormSubmit);
submitBtn.addEventListener('click', closePopup);
