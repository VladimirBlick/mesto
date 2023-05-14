//проверяет инпут на валидность и показывает ошбики
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    yesInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    noneInputError(formElement, inputElement, obj);
  }
};
//добавляет ошибки
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

//проверка полей на валидацию, всё ли ок и все ли поля валидны
const invalidInput = (inputList) => {
  return inputList.some((inputElement) => { //false - все валидны
    return !inputElement.validity.valid; //не true - нет невалидных
  });
};

const passiveButton = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

const activateButton = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
};

//если инпуты не валидны, кнопка не жмется
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (invalidInput(inputList)) { //есть ли невалидные поля?
    passiveButton(buttonElement, obj);
  } else {
    activateButton(buttonElement, obj);
  }
};

//слушатель на все инпуты с проверкой полей и активацией кнопки
const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      //  проверка при изменении любого из полей
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

const popupCardBtn = document.querySelector('.popup-card__close-btn');

function disableSubmitButton(popupCardBtn) {
  const settings = {
    inactiveButtonClass: 'popup__button_disabled',
  };
  popupCardBtn.setAttribute('disabled', true);
  popupCardBtn.classList.add(settings.inactiveButtonClass);
}

//Сама логика валидации
// 1. объявляем переменную с формой где инпуты
// 2. Вешаем слушатель на форму
// 3. Находим инпуты в форме
// 4. Делаем из инпутов массив и перебираем его форИч
// 5. Включаем валидацию инпутов (enableValidation)
// 6. Если инпуты валидны - кнопка активная, если нет - пассивная
