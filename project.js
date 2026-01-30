let allProducts = [];

// Fetch products
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data.products; // ✅ store products
    renderProducts(allProducts); // ✅ render initially
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Render function
function renderProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // clear old products

  products.forEach((product) => {
    // create card
    const card = document.createElement("div");
    card.className = "product-card";

    // title
    const title = document.createElement("h3");
    title.textContent = product.title;

    //description
    const para = document.createElement("h4");
    para.innerText = product.description;

    //category
    const cata = document.createElement("p");
    cata.innerText = product.category;

    //brand
    const brnd = document.createElement("h3");
    brnd.innerText = product.brand;
    brnd.style.color = "blue";

    //availabilityStatus
    const avail = document.createElement("h1");
    avail.innerText = product.availabilityStatus;
    avail.style.color = "red";

    // image
    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;
    img.style.width = "150px";

    // append inside card
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(para);
    card.appendChild(cata);
    card.appendChild(brnd);
    card.appendChild(avail);

    container.appendChild(card);
  });
}

// Search button
document.getElementById("btn").addEventListener("click", () => {
  let searchText = document.getElementById("inputbox").value.trim();

  if (searchText === "") return;

  window.open(`search.html?query=${encodeURIComponent(searchText)}`, "_blank");
});
