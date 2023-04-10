//открытие и закрытие поп-ап
const openPopupBtn = document.querySelector('.profileInfo__popUp_open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupBtn = document.querySelector('.popup__btn')

function togglePopup () {
  popup.classList.toggle('popup_open');
}

openPopupBtn.addEventListener('click', togglePopup);

popupCloseBtn.addEventListener('click', togglePopup);


//запись с инпута на страницу
const formPopup = document.querySelector('.popup__btn').addEventListener('click', myClick);

function myClick(){
const changeName = document.querySelector('.popup__input_name').value;
 document.querySelector('.profileInfo__name').innerHTML = changeName;
 const changeJob = document.querySelector('.popup__input_job').value;
 document.querySelector('.profileInfo__job').innerHTML = changeJob;
}

function closePopup(){

  popupCloseBtn = document.querySelector('.popup__close-btn');

}

let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_job')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
