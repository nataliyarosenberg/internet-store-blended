//Логіка сторінки Home
import { fetchCategories } from './js/products-api';
import { renderCategoriesMap } from './js/render-function';

async function initPage() {
  const categories = await fetchCategories();
  renderCategoriesMap(categories);
}

initPage();
