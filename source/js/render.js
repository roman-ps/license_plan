import {fillCard} from './card.js';

const renderCard = (parent, data) => {
  data.forEach((card) => {
    parent.appendChild(fillCard(card));
  })
};

export {renderCard}
