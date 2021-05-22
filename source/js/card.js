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
  const cardId = data.name;

  INPUT.id = cardId;
  LABEL.setAttribute('for', cardId)
  NAME.textContent = `License plan #${data.name}`;
  PRICE.textContent = `$${data.price} per license`;

  return card;
}

export {fillCard}
