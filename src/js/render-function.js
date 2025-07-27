import refs from './refs';

export function renderCategoriesMap(categories) {
  const markup = categories
    .map(category => {
      return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`;
    })
    .join('');
  refs.categotiesList.insertAdjacentHTML('beforeend', markup);
}
