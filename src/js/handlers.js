import { fetchProductsByCategory, fetchProducts } from './products-api';
import { clearProducts, renderProducts } from './render-function';
import refs from './refs';

export async function handlerClickOnCategory(e) {
  if (!e.target.classList.contains(`categories__btn`)) return;

  const currtntBtn = e.target;

  const selectedCategory = currtntBtn.textContent.trim();

  const products =
    selectedCategory === 'All'
      ? await fetchProducts()
      : await fetchProductsByCategory(selectedCategory);

  clearProducts();

  renderProducts(products);

  const buttons = refs.categotiesList.querySelectorAll('.categories__btn');

  buttons.forEach(btn => {
    btn.classList.remove('categories__btn--active');
  });

  currtntBtn.classList.add('categories__btn--active');
}
