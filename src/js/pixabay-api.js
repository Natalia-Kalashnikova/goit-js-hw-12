import axios from 'axios';

const API_KEY = "43236176-8efbdba212834d112cbf0fa21";
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchImages(searchValue) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  return fetch(`${BASE_URL}${SEARCH_PARAMS}`)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    });
}