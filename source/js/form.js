import {calculateTotalPrice} from './utils.js';

const PlanPrices = {
  start: '5',
  standart: '10',
  gold: '20',
  premium: '45',
  VIP: '130',
};

const FORM = document.querySelector('.form');
const INPUT_COUNT = FORM.querySelector('.form__count');

const formChangeHandler = (evt) => {
  const attr = evt.target.getAttribute('id');
  let price = +PlanPrices[attr];
  console.log(attr)
  console.log(price)
};

const inputChangeHandler = () => {
  
}

const addEventListeners = () => {
  FORM.addEventListener('change', formChangeHandler);
  INPUT_COUNT.addEventListener('input', formChangeHandler);
}

export {addEventListeners}
