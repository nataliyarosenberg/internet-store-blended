//Логіка сторінки Home
import { fetchCategories, fetchProducts } from './js/products-api';
import { renderCategoriesMap, renderProducts } from './js/render-function';

async function initPage() {
  const categories = await fetchCategories();
  renderCategoriesMap(categories);
  const products = await fetchProducts();
  renderProducts(products.products);
}

initPage();


