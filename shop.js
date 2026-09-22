let products = [
    { name: "کتاب", price: 150000 },
    { name: "خودکار", price: 20000 },
    { name: "دفترچه", price: 35000 },
    { name: "کیف", price: 400000 }
];

let cart = [];
let productsDiv = document.getElementById("products");
let cartList = document.getElementById("cart");
let totalSpan = document.getElementById("total");

products.forEach(function(product) {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = product.name + "<br>" + product.price + " تومان";

    let addBtn = document.createElement("button");
    addBtn.textContent = "اضافه به سبد";
    div.appendChild(addBtn);

    addBtn.addEventListener("click", function() {
        cart.push(product);
        updateCart();
    });

    productsDiv.appendChild(div);
});

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(function(item, index) {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " تومان ";

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "حذف";
        removeBtn.addEventListener("click", function() {
            cart.splice(index, 1);
            updateCart();
        });

        li.appendChild(removeBtn);
        cartList.appendChild(li);
        total = total + item.price;
    });

    totalSpan.textContent = total;
}