// API call with "fetch" by ID
const getProductDetails = (id) => {
    fetch("http://localhost:3000/api/products/" + id)
        .then((res) => {
            if (res.ok) {
                return res.json();
        }})
        .then((data) => {
            createProductDetails(data);
        })
        .catch((err) => {
            console.log(err)
        });
};

const getIdFromUrl = () => {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const id = url.searchParams.get("id");
    return id;
}

const id = getIdFromUrl();
getProductDetails(id);

const createProductDetails = (jsonObj) => {
    const product = jsonObj;

    const picture = document.createElement("img");
    picture.src = product.imageUrl;
    picture.alt = product.altTxt;
    //document.getElementsByClassName("item__img");

    const title = document.getElementById("title");
    title.textContent = product.name;

    const price = document.getElementById("price");
    price.textContent = product.price;

    const description = document.getElementById("description");
    description.textContent = product.description;

    // FOR EACH color :
    // CREATE element "option",
    // ADD the color

    const select = document.getElementById("colors");

    const colorsFill = (colors) => {
        let color = undefined;
        for (let i = 0; i < colors.length; i++) {
            color = product.colors[i];
            const option = document.createElement("option");
            option.textContent = color;
            option.value = color;
            select.appendChild(option);
        }
    }

    colorsFill(colors);
}