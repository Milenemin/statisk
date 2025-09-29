const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("category");
const productList = document.querySelector("main");
document.querySelector("h3").textContent = category;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach((element) => {
    console.log(element);
    productList.innerHTML += `
    <section class="sub-category-section">
        <a class="pro1-button" href="product.html?id=${element.id}">
          <img class="img1"
          src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />
         <div class="words">
          <h4>${element.productdisplayname}</h4>
          <p>Price: ${element.price} DKK</p>
          ${element.discount ? `<p class="p3">Discount:${element.discount}</p>` : ""}
          ${element.soldout ? `<p class="p3">Discount:${element.soldout}</p>` : ""}
          <p class="p3">Read More</p>
          </div>
        </a>
    </section>`;
  });
}
