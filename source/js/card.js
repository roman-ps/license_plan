import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const Selectors = {
  INPUT: '.form__input',
  LABEL: '.form__label',
  NAME: '.form__label-name',
  PRICE: '.form__label-price',
};

const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNodes = getNodes(card, Selectors);
  const {INPUT, LABEL, NAME, PRICE} = cardNodes;
  const cardId = `radio${data.id}`;

  INPUT.id = cardId;
  LABEL.setAttribute('for', cardId)
  NAME.textContent = data.name;
  PRICE.textContent = data.price;

  return card;
}

export {fillCard}
