import"./assets/styles-JE8YjOlG.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";const r="https://dummyjson.com/products",c="/category-list";async function n(){try{return(await s(`${r}${c}`)).data}catch(t){console.error(t)}}const a={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function i(t){const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");a.categotiesList.insertAdjacentHTML("beforeend",e)}async function u(){const t=await n();i(t)}u();
//# sourceMappingURL=index.js.map
