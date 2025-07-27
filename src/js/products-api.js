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


export async function fetchProducts(currentPage = 1) {
  try {
    const res = await axios(`${URL}?limit=12&skip=${(currentPage - 1) * 12}`)
    return res.data
  } catch (error) {
    console.log(error.message);
  }
}