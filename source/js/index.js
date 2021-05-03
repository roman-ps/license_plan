import {loadData} from './api.js';
import {renderCard} from './render.js';
import {storeData} from './store.js';
import {addEventListeners} from './form.js';

const CATALOG = document.querySelector('.catalog');

const handleDataLoadSuccess = (data) => {
  renderCard(CATALOG, storeData(data));
  addEventListeners();
};

loadData()
  .then(handleDataLoadSuccess)
