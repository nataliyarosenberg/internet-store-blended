import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const n="https://dummyjson.com/products",g="/category-list";async function _(){try{return(await a(`${n}${g}`)).data}catch(t){console.error(t)}}async function u(t=1){try{return(await a(`${n}?limit=12&skip=${(t-1)*12}`)).data.products}catch(s){console.log(s.message)}}async function m(t,s=1){try{return(await a(`${n}/category/${t}?limit=12&skip=${(s-1)*12}`)).data.products}catch(r){return console.error("Error",r),[]}}const e={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function y(t){t.unshift("All");const s=t.map(r=>`<li class="categories__item">
   <button class="categories__btn" type="button">${r}</button>
 </li>`).join("");e.categotiesList.insertAdjacentHTML("beforeend",s)}function d(t){const s=t.map(({thumbnail:r,id:c,title:i,brand:o,category:p,price:l})=>`
    <li class="products__item" data-id="${c}">
    <img class="products__image" src="${r}" alt=""/>
    <p class="products__title">${i}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${o}</span></p>
    <p class="products__category">Category:${p} </p>
    <p class="products__price">Price:${l} $</p>
 </li>`).join("");e.productsList.insertAdjacentHTML("beforeend",s)}function f(){e.productsList.innerHTML=""}async function b(t){if(!t.target.classList.contains("categories__btn"))return;const s=t.target,r=s.textContent.trim(),c=r==="All"?await u():await m(r);f(),d(c),e.categotiesList.querySelectorAll(".categories__btn").forEach(o=>{o.classList.remove("categories__btn--active")}),s.classList.add("categories__btn--active")}async function L(){const t=await _();y(t);const s=await u();d(s)}L();e.categotiesList.addEventListener("click",b);
//# sourceMappingURL=index.js.map
