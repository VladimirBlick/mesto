//делает поле красным и показывает снизу ошибку
const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

//убирает ошибки
const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};

//проверяет инпут на валидность при наборе символов и выводит предупрждающие сообщения
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

//ф-я обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?»
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => { //false - все поля валидны
    return !inputElement.validity.valid; //не true - нет невалидных полей
  });
};

const deactivateButton = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

const activateButton = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
}

//блокирует кнопку, если хотя бы одно поле невалидно
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) { //проверяем есть ли невалидные поля
    deactivateButton(buttonElement, obj);
  } else {
    activateButton(buttonElement, obj);
  }
}

//навешивает слушатель на все инпуты с проверкой полей и активацией кнопки
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
