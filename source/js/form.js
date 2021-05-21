import {calculateTotalPrice} from './utils.js';

const FORM = document.querySelector('.form');
const LICENSE_COUNT = FORM.querySelector('.form__count');
const TOTAL_PRICE_CONTAINER = FORM.querySelector('.form__total-price');
const SELECTED_PLAN_CONTAINER = FORM.querySelector('.form__selected-plan');

const PlanPrices = {
  start: 5,
  standart: 10,
  gold: 20,
  premium: 45,
  vip: 130,
};

let totalPrice = 0;
let selectedPlan = 'Not selected';

const renderTotalPrice = () => {
  TOTAL_PRICE_CONTAINER.textContent = totalPrice;
};

const renderSelectedPlan = () => {
  SELECTED_PLAN_CONTAINER.textContent = selectedPlan;
};

const formRadioChangeHandler = (evt) => {
  const id = evt.target.getAttribute('id');
  const price = PlanPrices[id];

  selectedPlan = id;
  totalPrice = calculateTotalPrice(price, LICENSE_COUNT.value);
  renderSelectedPlan();
  renderTotalPrice();
};

const formInputChangeHandler = () => {
  const id = FORM.querySelector('input:checked').getAttribute('id') || 0;
  const price = PlanPrices[id];

  selectedPlan = id;
  totalPrice = calculateTotalPrice(price, LICENSE_COUNT.value);
  renderSelectedPlan();
  renderTotalPrice();
};

const addEventListeners = () => {
  renderSelectedPlan();
  renderTotalPrice();
  FORM.addEventListener('change', formRadioChangeHandler);
  LICENSE_COUNT.addEventListener('input', formInputChangeHandler);
};

export {addEventListeners}
