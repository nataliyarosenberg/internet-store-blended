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

export function renderProducts(products) {
  const markup = products.map(({ thumbnail, id, title, brand, category, price }) => {
    return `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt=""/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category:${category} </p>
    <p class="products__price">Price:${price} $</p>
 </li>`
  }).join("");
  refs.productsList.insertAdjacentHTML("beforeend", markup);
}