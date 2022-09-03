import axios from 'axios';
export async function fetchData(name, page) {
  const API_KEY = '29565253-2f5e819143320e39f486b959d';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

  const response = await axios.get(url);
  const data = await response.data;
  return data;
}
