import { elements } from './elements';
import { fetchImage } from './pixabay-api';
import { createMarkup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  '39216416-ade7d4bf60cd1f5e815f694cd';


elements.searchForm.addEventListener('submit', createMarkup)
















// function updateSelect(data) {
//   fetchBreeds(data)
//     .then(data => {
//       loader.classList.replace('loader', 'is-hidden');

//       let markSelect = data.map(({ name, id }) => {
//         return `<option value ='${id}'>${name}</option>`;
//       });
//       breedSelect.insertAdjacentHTML('beforeend', markSelect);
//       new SlimSelect({
//         select: breedSelect,
//       });
//     })
//     .catch(onError);
// }
// updateSelect();


// function onError() {
//   breedSelect.classList.remove('is-hidden');
//   loader.classList.replace('loader', 'is-hidden');

//   Notify.failure(
//     'Sorry! There are no images matching your search query. Please try again.'
//   );
// }