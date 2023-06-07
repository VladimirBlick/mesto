const validatorConfig = {
  allforms: document.forms,
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorSelectorTemplate: '.popup__error_',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  textErrorClass: 'popup__error_visible'
}

function enableValidation(config){
const forms =  Array.from(config.allforms);
forms.forEach((form) =>{
  const  inputList =  form.querySelectorAll(config.inputSelector);
  const button = form.querySelector(config.submitButtonSelector);
  stickEventListener(inputList, button, config.errorSelectorTemplate,  config.inactiveButtonClass, config.inputErrorClass, config.textErrorClass);
})
};

enableValidation(validatorConfig);

function stickEventListener(inputList, button, errorSelectorTemplate, inactiveButtonClass, inputErrorClass, textErrorClass){
  inputList.forEach((input) =>{
    input.addEventListener('input', () => {
     checkInputValidity(input, errorSelectorTemplate, inputErrorClass,textErrorClass);
     toggleButtonState(inputList, button, inactiveButtonClass);
    })
  }
  )
};

function checkInputValidity(input, errorSelectorTemplate, inputErrorClass,textErrorClass){
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`)
  if (input.validity.valid){
    hideInputError(input, errorTextElement, inputErrorClass, textErrorClass);
  }
  else {
    showInputError(input, errorTextElement, inputErrorClass, textErrorClass)
  }
}

function hideInputError  (input, errorTextElement, inputErrorClass, textErrorClass){
input.classList.remove(inputErrorClass);
errorTextElement.textContent = '';
errorTextElement.classList.remove(textErrorClass);
}

function showInputError  (input, errorTextElement, inputErrorClass, textErrorClass){
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(textErrorClass);

}

function toggleButtonState(inputList, button, inactiveButtonClass){
  if (validInput(inputList)) {
    enableButton(button, inactiveButtonClass);
  } else {
    inactiveButton(button, inactiveButtonClass);
  }
};

function validInput(inputList){
  return Array.from(inputList).every((input) => input.validity.valid)
}

function enableButton (button, inactiveButtonClass){
button.classList.remove(inactiveButtonClass);
button.disabled = false;
}

function inactiveButton (button, inactiveButtonClass){
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
};

function resetErrorOpenForm(form){
form.querySelectorAll(validatorConfig.inputSelector).forEach((input) =>{
  const errorTextElement = document.querySelector(`${validatorConfig.errorSelectorTemplate}${input.name}`)
if (!input.validity.valid){
  hideInputError(input, errorTextElement, validatorConfig.inputErrorClass, validatorConfig.textErrorClass)
}
} )
}