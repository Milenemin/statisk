const productContainer = document.querySelector("#productContainer");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    console.log(product);

    productContainer.innerHTML = `
    <main id="productContainer">
    <section class="product-grid">
    <div class="img-extra">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
    <p id="soldout">Sold-Out</p>
    <p id="discount">Discount</p>
    </div>
    <div class="pro-desc">
    <h4> ${product.productdisplayname}</h4>
    <h5 class="articleType">Type:</span> ${product.articletype}</h5>
    <h6>Brand:  ${product.brandname}</h6>
    <p>Production year: ${product.productionyear}</p>
    <form action="">
    <label for="Size">Choose a Size:</label>
    <select name="size" id="size">
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    </select>
    </form>
    <p>Price: ${product.price}</p>
    <button>Buy</button>
    </div>
    </section>
    </main> `;
  });
