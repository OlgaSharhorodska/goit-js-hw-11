import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  '39216416-ade7d4bf60cd1f5e815f694cd';


const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

catInfo.classList.add('is-hidden');

breedSelect.addEventListener('change', createMarkup)



function updateSelect(data) {
  fetchBreeds(data)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden');

      let markSelect = data.map(({ name, id }) => {
        return `<option value ='${id}'>${name}</option>`;
      });
      breedSelect.insertAdjacentHTML('beforeend', markSelect);
      new SlimSelect({
        select: breedSelect,
      });
    })
    .catch(onError);
}
updateSelect();

function createMarkup(evt) {
  loader.classList.replace('is-hidden', 'loader');
  breedSelect.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');

  const breedId = evt.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden');
      breedSelect.classList.remove('is-hidden');
        
      const { url, breeds } = data[0];

        catInfo.innerHTML = `<img src="${url}" alt="${breeds[0].name}" width="400"/>
      <div class="box"><h2>${breeds[0].name}</h2>
      <p>${breeds[0].description}</p>
      <p><strong>Temperament:</strong> ${breeds[0].temperament}</p></div>`;
      catInfo.classList.remove('is-hidden');
    })
    .catch(onError);
}

function onError() {
  breedSelect.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');

  Notify.failure(
    'Sorry! There are no images matching your search query. Please try again.'
  );
}