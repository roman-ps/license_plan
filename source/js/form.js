import {calculateTotalPrice} from './utils.js';

const PlanPrices = {
  radio1: '5',
  radio2: '10',
  radio3: '20',
  radio4: '45',
  radio5: '130',
}

const FORM = document.querySelector('.form');
const INPUT_COUNT = document.querySelector('.form__count');

const formChangeHandler = (evt) => {
  const attr = evt.target.getAttribute('id');
  const price = PlanPrices[attr];
  // const parent = evt.target.closest('.form__item');
  // const priceItem = parent.querySelector('.form__label-price').textContent;
  console.log(attr)
  console.log(price)
}

const addEventListeners = () => {
  FORM.addEventListener('change', formChangeHandler);
  INPUT_COUNT.addEventListener('input', formChangeHandler);
}

export {addEventListeners}
