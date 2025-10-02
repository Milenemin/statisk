const params = new URLSearchParams(window.location.search);
const category = params.get("category");
//console.log(category);
const productList = document.querySelector("main");
document.querySelector("h3").textContent = category;
let allData, currentDataSet;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=50&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = currentDataSet = data;
    showProducts(allData);
  });

document.querySelector("#filterbuttons").addEventListener("click", showFiltered);

function showFiltered(event) {
  const filter = event.target.dataset.gender;
  if (filter == "All") {
    currentDataSet = allData;
  } else {
    const udsnit = allData.filter((product) => product.gender == filter);
    currentDataSet = udsnit;
  }
  showProducts(currentDataSet);
}

document.querySelector("#sorting").addEventListener("click", sortitems);

function sortitems(event) {
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    currentDataSet.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  } else {
    currentDataSet.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
  }
  showProducts(currentDataSet);
}

function showProducts(products) {
  productList.innerHTML = "";
  products.forEach((element) => {
    productList.innerHTML += `
    <article class="product-wrapper">
        <a class="pro1-button" href="product.html?id=${element.id}">
         <img class="img1" src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" />

         <div class="words">
         <h4>${element.productdisplayname}</h4>
         <p>Price: ${element.price} DKK</p>
            ${
              element.discount
                ? `<div class="price-discount">
                 <p class="discount">${element.discount}% </p>
                 <p> Now DKK: ${Math.round(element.price - (element.price * element.discount) / 100)}</p>
                 </div>`
                : ""
            }

          ${element.soldout ? `<p class="sold-out">Sold Out</p>` : ""}
          <p class="read-more">Read More</p>
          </div>
        </a>
    </article>`;
  });
}
