import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function serviceSearchImg(currentPage, valueSearch) {
  const params = new URLSearchParams({
    key: '39267126-0a41b3b9689f557b8f9deee48',
    q: valueSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    min_width: '360',
    min_height: '240',
    per_page: '40',
    page: currentPage,
  });
  try {
    const response = await axios.get(`?${params}`);
    if (response.data.total === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export { serviceSearchImg };
