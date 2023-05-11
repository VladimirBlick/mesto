// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// const form = document.querySelector('.popup__form'); //нашли форму
// console.log(form);

// const enableValidation = () => {

// form.addEventListener('submit', (evt) => { //повесили слушатель и функцию стрелочную
//   evt.preventDefault(); // которая останавливает отправку формы
//   const popupInput = Array.from (form.querySelectorAll('.popup__input')); //находим инпуты в форме и делаем из них массив
// console.log(popupInput)
//   // popupInput.forEach(input =>{  //перебираем инпуты в массиве с помощью форИч

//   } })



//Сама логика валидации
// 1. объявляем переменную с формой где инпуты
// 2. Вешаем слушатель на форму
// 3. Находим инпуты в форме
// 4. Делаем из инпутов массив и перебираем его форИч
// 5. Включаем валидацию инпутов (enableValidation = форма)



// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_error',
//   errorClass: 'popup__error_visible'
// });




// const popupProfileSubmit = document.querySelector('.popup-profile__btn');

// popupProfileSubmit.addEventListener('click', () => {
//   const inputProfile = Array.from(document.querySelectorAll('.popup-profile__input'));
// })

// inputProfile.forEach(inputElement => {
//   console.log(inputElement);
// })
