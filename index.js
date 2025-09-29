const categorylist = document.querySelector(".category-section");
const articletitle = document.querySelector("h4");
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += `<a href="productlist.html?category="${category.category}>${category.category}</a>`;
  });
}

//   <a class="apparel-button" href="categories.html">
//     <img src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp" />
