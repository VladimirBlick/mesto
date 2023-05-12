//красное подчеркивание инпута и ошибка
const yesInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

//убирает ошибки
const noneInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};

//проверяет инпут на валидность и показывает сообщения ошибок
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    yesInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    noneInputError(formElement, inputElement, obj);
  }
};

//проверка полей на валидацию, всё ли ок и все ли поля валидны
const invalidInput = (inputList) => {
  return inputList.some((inputElement) => { //false - все валидны
    return !inputElement.validity.valid; //не true - нет невалидных
  });
};

const passiveButton = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

const activateButton = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
}

//блокировка кнопки, если поля не валидны
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (invalidInput(inputList)) { //проверка есть ли невалидные поля
    passiveButton(buttonElement, obj);
  } else {
    activateButton(buttonElement, obj);
  }
}

//слушатель на все инпуты с проверкой полей и активацией кнопки
const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

//навешивает слушатель на все формы в документе и снимает стандартные действия
const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_visible'
});


// const enableValidation = (obj) => {
//   const formList = Array.from(document.querySelectorAll(obj.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, obj);
//   });
// };

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

// const popupProfileSubmit = document.querySelector('.popup-profile__btn');

// popupProfileSubmit.addEventListener('click', () => {
//   const inputProfile = Array.from(document.querySelectorAll('.popup-profile__input'));
// })

// inputProfile.forEach(inputElement => {
//   console.log(inputElement);
// })
