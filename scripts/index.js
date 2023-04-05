const openPopupBtn = document.querySelector('.profileInfo__popUp_open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');

function togglePopup () {
  popup.classList.toggle('popup_open');
}

openPopupBtn.addEventListener('click', togglePopup);

popupCloseBtn.addEventListener('click', togglePopup);
