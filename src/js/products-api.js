import axios from 'axios';
const URL = 'https://dummyjson.com/products';
const ENDPOINT = '/category-list';
export async function fetchCategories() {
  try {
    const response = await axios(`${URL}${ENDPOINT}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

