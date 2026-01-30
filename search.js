const params = new URLSearchParams(window.location.search);
const query = params.get("query").toLowerCase();

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    let filtered = data.products.filter(product =>
        product.title.toLowerCase().includes(query)
    );
    renderProducts(filtered);
})
.catch(err => console.log(err));

function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<h3>No products found</h3>";
        return;
    }

    products.forEach(product => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.thumbnail;
        img.style.width = "150px";

        let title = document.createElement("h3");
        title.innerText = product.title;

        card.appendChild(img);
        card.appendChild(title);
        container.appendChild(card);
    });
}
