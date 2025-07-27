import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const o="https://dummyjson.com/products",d="/category-list";async function l(){try{return(await e(`${o}${d}`)).data}catch(t){console.error(t)}}async function m(t=1){try{return(await e(`${o}?limit=12&skip=${(t-1)*12}`)).data}catch(s){console.log(s.message)}}const c={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function _(t){const s=t.map(r=>`<li class="categories__item">
   <button class="categories__btn" type="button">${r}</button>
 </li>`).join("");c.categotiesList.insertAdjacentHTML("beforeend",s)}function g(t){const s=t.map(({thumbnail:r,id:a,title:n,brand:i,category:p,price:u})=>`
    <li class="products__item" data-id="${a}">
    <img class="products__image" src="${r}" alt=""/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${i}</span></p>
    <p class="products__category">Category:${p} </p>
    <p class="products__price">Price:${u} $</p>
 </li>`).join("");c.productsList.insertAdjacentHTML("beforeend",s)}async function y(){const t=await l();_(t);const s=await m();g(s.products)}y();
//# sourceMappingURL=index.js.map
