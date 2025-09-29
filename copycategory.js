const productList = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach((element) => {
    console.log(element);
    productList.innerHTML += `{
        <a class="pro1-button" href="product.html?id=${element.id}">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />
<h4>${element.productdisplayname}</h4>
<p>Price: ${element.price} DKK</p>
<p class="p3">Read More</p>
</a>`;
  });
}
