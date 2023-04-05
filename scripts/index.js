const openPopupBtn = document.querySelector('.profileInfo__popUp_open');
const popup = document.querySelector('.popup');

function togglePopup () {
  popup.classList.toggle('popup_open')
}

openPopupBtn.addEventListener('click', togglePopup)
