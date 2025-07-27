//Логіка сторінки Home
import { fetchCategories, fetchProducts } from './js/products-api';
import { renderCategoriesMap, renderProducts } from './js/render-function';
import { handlerClickOnCategory } from './js/handlers';
import refs from './js/refs';

async function initPage() {
  const categories = await fetchCategories();
  renderCategoriesMap(categories);
  const products = await fetchProducts();
  renderProducts(products);
}

initPage();

refs.categotiesList.addEventListener(`click`, handlerClickOnCategory);
