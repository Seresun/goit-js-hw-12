import axios from 'axios';

const API_KEY = '45488141-0a4a6f9550d86e9b8ad8f4cbd';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
}
