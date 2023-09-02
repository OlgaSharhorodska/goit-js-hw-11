
// В качестве бэкенда используй публичный API сервиса Pixabay

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39216416-ade7d4bf60cd1f5e815f694cd';


export function fetchImage() {
  return fetch(`${BASE_URL}?key=${API_KEY}`).then(
    response => {
      if (!response.ok) {

        throw new Error(response.status);
      }
      return response.json();
    }
  );
}



