// Form
const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const category = document.getElementById("category");
const addBtn = document.getElementById("addBtn");

// Search & Filter
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

// Product Container
const productContainer = document.getElementById("productContainer");

// Summary
const totalProducts = document.getElementById("totalProducts");
const totalQuantity = document.getElementById("totalQuantity");
const grandTotal = document.getElementById("grandTotal");

// Buttons
const clearCart = document.getElementById("clearCart");

//logic for saving data to localstorage
let edit = -1;
function addProduct(prodName, prodPrice, prodQuantity, prodCategory) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = {
        name: prodName,
        price: Number(prodPrice),
        quantity: Number(prodQuantity),
        category: prodCategory
    };
    if (edit === -1) {
        // mean normal add kr dena hai localstorage me
        products.push(product);
    } else {
        // iska mtlb user edit mode me hai to ham bas data override krenge
        products[edit] = product;
        edit = -1;
        addBtn.textContent = "Add Product";
    }

    localStorage.setItem("products", JSON.stringify(products));

    productForm.reset();
    location.reload();
}

//Logic for form handling
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const prodName = productName.value;
    const prodPrice = price.value;
    const prodQuantity = quantity.value;
    const prodCategory = category.value;
    addProduct(prodName, prodPrice, prodQuantity, prodCategory);
    productForm.reset();
    location.reload();
});


let card = "";
const products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach((prod) => {

    card += `
        <div class="card bg-white rounded-lg shadow-md p-4 border">
            <div class="flex justify-between items-start">
                <div>
                    <h2 class="text-lg font-semibold">${prod.name}</h2>
                    <p class="text-sm text-gray-500">${prod.category}</p>
                </div>
                <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">₹${prod.price}</span>
            </div>
            <div class="mt-4 space-y-1">
                <p><span class="font-medium">Quantity:</span> ${prod.quantity}</p>
                <p><span class="font-medium">Total:</span> ₹${prod.price * prod.quantity}</p>
            </div>
            <div class="mt-5 flex gap-3">
                <button class="edit-btn flex-1 bg-yellow-500 text-white py-2 rounded">Edit</button>
                <button class="delete-btn flex-1 bg-red-500 text-white py-2 rounded">Delete</button>
            </div>
        </div>
    `;
});

productContainer.innerHTML = card;


//Total product count
const prodLen = JSON.parse(localStorage.getItem("products")) || [];
totalProducts.textContent = prodLen.length;

//Total quantity count
let totalQuantityCount = 0;
prodLen.forEach((prod) => {
    totalQuantityCount += prod.quantity;
});
totalQuantity.textContent = totalQuantityCount;

//Grand Total
let grandTotalCount = 0;
prodLen.forEach((prod) => {
    grandTotalCount += prod.price * prod.quantity;
});
grandTotal.textContent = grandTotalCount;

//clear cart logic
clearCart.addEventListener("click", () => {
    localStorage.removeItem("products");
    location.reload();
});

//Delete btn logic
const delBtns = document.querySelectorAll(".delete-btn");
const editBtns = document.querySelectorAll(".edit-btn");

delBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        location.reload();
    });
});


//Edit btn logic
editBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        const prod = products[index];
        productName.value = prod.name;
        price.value = prod.price;
        quantity.value = prod.quantity;
        category.value = prod.category;
        edit = index;
        addBtn.textContent = "Update Product";
    });
});

// search logic
searchInput.addEventListener("input", () => {
    const searchVal = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((prod) => prod.name.toLowerCase().includes(searchVal));
    card = "";
    filteredProducts.forEach((prod) => {
        card += `
            <div class="card bg-white rounded-lg shadow-md p-4 border">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-lg font-semibold">${prod.name}</h2>
                        <p class="text-sm text-gray-500">${prod.category}</p>
                    </div>
                    <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">₹${prod.price}</span>
                </div>
                <div class="mt-4 space-y-1">
                    <p><span class="font-medium">Quantity:</span> ${prod.quantity}</p>
                    <p><span class="font-medium">Total:</span> ₹${prod.price * prod.quantity}</p>
                </div>
                <div class="mt-5 flex gap-3">
                    <button class="edit-btn flex-1 bg-yellow-500 text-white py-2 rounded">Edit</button>
                    <button class="delete-btn flex-1 bg-red-500 text-white py-2 rounded">Delete</button>
                </div>
            </div>
        `;
    });
    productContainer.innerHTML = card;
});

//filter logic
filterCategory.addEventListener("change", () => {
    const filterVal = filterCategory.value;
    const filteredProducts = products.filter((prod) => prod.category === filterVal || filterVal === "all");
    card = "";
    filteredProducts.forEach((prod) => {
        card += `
            <div class="card bg-white rounded-lg shadow-md p-4 border">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-lg font-semibold">${prod.name}</h2>
                        <p class="text-sm text-gray-500">${prod.category}</p>
                    </div>
                    <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">₹${prod.price}</span>
                </div>
                <div class="mt-4 space-y-1">
                    <p><span class="font-medium">Quantity:</span> ${prod.quantity}</p>
                    <p><span class="font-medium">Total:</span> ₹${prod.price * prod.quantity}</p>
                </div>
                <div class="mt-5 flex gap-3">
                    <button class="edit-btn flex-1 bg-yellow-500 text-white py-2 rounded">Edit</button>
                    <button class="delete-btn flex-1 bg-red-500 text-white py-2 rounded">Delete</button>
                </div>
            </div>
        `;
    });
    productContainer.innerHTML = card;
});