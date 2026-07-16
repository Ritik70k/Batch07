const arr = [
    {
        product: "Laptop",
        name: "Acer Nitro",
        price: "Rs. 750000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZZvJrZ9MciqT1GbrsLwfmLSs3y4cIZf53yRupu4S_A&s=10"
    },
    {
        product: "Mobile",
        name: "Samsung Galaxy A35",
        price: "Rs. 22000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF9K6aFqwxSEHV0rIXyMKwywJwqDUiZ_GHZTzLY12kQ&s=10"
    },
    {
        product: "Camera",
        name: "Nikon D3500",
        price: "Rs. 40000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1IYdk-kTRJrgnndjBlDQyGEJRe5TwDvZU3GYhvDsw&s=10"
    },
    {
        product: "Headphone",
        name: "Boat Rockerz 500",
        price: "Rs. 5000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36V0aHSYWPqIUhIbWDAQW0iHAMNnRjjn3qd_sfeSvpA&s=10"
    },
    {
        product: "Watch",
        name: "Casio G-Shock",
        price: "Rs. 25000",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-D654iYRm5vDfnk1iZnWpguz9BMefww0NEy3O1zywng5Ue_g3Wgww8NewA_73tdnjclj2uu9wHgcqO5r5KQRMAlaMACJCKb89I6h6Th0"
    },
]

const img = document.querySelector("img");
const h2 = document.querySelector("h2");
const p = document.querySelector("#pname");
const price = document.querySelector("#price");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * arr.length);
    img.setAttribute("src", arr[random].img);
    h2.textContent = `Category: ${arr[random].product}`;
    p.textContent = `Product Name: ${arr[random].name}`;
    price.textContent = `Price: ${arr[random].price}`;

})

