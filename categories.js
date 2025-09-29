const productContainer = document.querySelector(".sub-category-section");
const id = 1165;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    productContainer.innerHTML = `
<a class="pro1-button" href="product.html?id=${element.id}">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />
<h4>${element.productdisplayname}</h4>
<p>Price: ${element.price} DKK</p>
<p class="p3">Read More</p>
</a>`;
  });
}
