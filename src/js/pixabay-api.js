export async function fetchImages(query) {
  const API_KEY = '45488141-0a4a6f9550d86e9b8ad8f4cbd';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
