const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);
const productList = document.querySelector("main");

document.querySelector("h3").textContent = category;

document.querySelector("#filterbuttons button").addEventListener("click", showFiltered);

function showFiltered(event) {
  const filter = event.dataset.gender;
  if (filter == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == filter);
    showProducts(udsnit);
  }
}
let allData;

document.querySelector("#sorting").addEventListener("click", sortitems);
function sortitems(event) {
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    allData.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  } else {
    allData.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
  }
  showProducts(allData);
}

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
    <article class="product-wrapper">
        <a class="pro1-button" href="product.html?id=${element.id}">
         <img class="img1" src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />

         <div class="words">
          <h4>${element.productdisplayname}</h4>
           <div class="price-discount">
          <p>Price: ${element.price} DKK</p>
          ${element.discount ? `<p class="discount">${element.discount}%</p>` : ""}
          </div>
          ${element.soldout ? `<p class="sold-out">Sold Out</p>` : ""}
          <p class="read-more">Read More</p>
          </div>
        </a>
    </article>`;
  });
}
