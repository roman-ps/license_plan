const FORM = document.querySelector('.form');
const INPUT_COUNT = document.querySelector('.form__count');

const formChangeHandler = () => {
  console.log('3242342')
}

const addEventListeners = () => {
  FORM.addEventListener('change', formChangeHandler);
  INPUT_COUNT.addEventListener('input', formChangeHandler);
}

export {addEventListeners}
