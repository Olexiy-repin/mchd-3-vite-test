// import { saveToLocalStorage, loadFromLocalStorage } from './localStorage.js';
// import localStorageInterface from './localStorage.js';
// import * as localStorageInterface from './localStorage.js';

// console.log(localStorageInterface);

// const product = {
//   title: 'Apple',
//   price: 100,
// };

// saveToLocalStorage('product-info', product);

// const refs = {
//   readBtn: document.querySelector('.js-read-btn'),
// };

// refs.readBtn.addEventListener('click', event => {
//   const dataFromLS = loadFromLocalStorage('product-info');

//   if (dataFromLS === null) {
//     return;
//   }

//   console.log(dataFromLS);
// });

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox);

const simplelightboxOptions = {
  captionsData: 'alt',
  captionDelay: 500,
};

new SimpleLightbox('.js-gallery-link', simplelightboxOptions);
