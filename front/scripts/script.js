// API call with "fetch"
const getProducts = () => {
    fetch("http://localhost:3000/api/products")
        .then((res) => {
            if (res.ok) {
                return res.json();
        }})
        .then((data) => {
            createHTMLProduct(data);
        })
        .catch((err) => {
            console.log(err)
        });
};

// Function to create HTML elements and inject them in the DOM
const createHTMLProduct = (jsonObj) => {
    const products = jsonObj;
  
    for (let i = 0; i < products.length; i++) {
        const currentProduct = products[i];
        const productLink = document.createElement('a');
        const article = document.createElement('article');
        const productPicture = document.createElement('img');
        const productName = document.createElement('h3');
        const productDescription = document.createElement('p');

        productName.classList.add("productName");
        productDescription.classList.add("productDescription");
    
        productLink.href = "./product.html?id=" + currentProduct._id;
        productPicture.src = currentProduct.imageUrl;
        productPicture.alt = currentProduct.altTxt;
        productName.textContent = currentProduct.name;
        productDescription.textContent = currentProduct.description;

        document.getElementById("items").appendChild(productLink);

        productLink.appendChild(article);

        article.appendChild(productPicture);
        article.appendChild(productName);
        article.appendChild(productDescription);
    }
}

getProducts()