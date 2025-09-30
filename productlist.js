const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);
const productList = document.querySelector("main");

document.querySelector("h3").textContent = category;

document.querySelectorAll("#filterbuttons button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == filter);
    showProducts(udsnit);
  }
}
let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=50&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    console.log(allData);
    showProducts(allData);
  });

function showProducts(products) {
  console.log(products);
  productList.innerHTML = "";
  products.forEach((element) => {
    console.log(element);
    productList.innerHTML += `
    <article>
        <a class="pro1-button" href="product.html?id=${element.id}">
         <img class="img1" src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />

         <div class="words">
          <h4>${element.productdisplayname}</h4>
          <p>Price: ${element.price} DKK</p>
          ${element.discount ? `<p class="p3">Discount:${element.discount}</p>` : ""}
          ${element.soldout ? `<p class="p3">Discount:${element.soldout}</p>` : ""}
          <p class="p3">Read More</p>
          </div>
        </a>
    </article>`;
  });
}
