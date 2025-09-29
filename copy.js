const productContainer = document.querySelector("#productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const produktData = `https://kea-alt-del.dk/t7/api/products/${id}`;
console.log("params", params);
// console.log("mit id fra URL:" + id);

fetch(produktData)
  .then((res) => res.json())
  .then((produktData) => {
    console.log(produktData.articletype);

    console.log(productContainer);
    productContainer.innerHTML = ` 
    <main id="productContainer">
    <section class="product-grid">
    <div class="img-extra">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${produktData.id}" />
    <p id="soldout">Sold-Out</p>
    <p id="discount">Discount</p>
    </div>
    <div class="pro-desc">
    <h4> ${produktData.productdisplayname}</h4>
    <h5 class="articleType">Type:</span> ${produktData.articletype}</h5>
    <h6>Brand:  ${produktData.brandname}</h6>
    <p>Production year: ${produktData.productionyear}</p>
    <form action="">
    <label for="Size">Choose a Size:</label>
    <select name="size" id="size">
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    </select>
    </form>
    <p>Price: ${produktData.price}</p>
    <button>Buy</button>
    </div>
    </section>
    </main> `;
  });
