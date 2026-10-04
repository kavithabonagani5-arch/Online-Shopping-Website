let cart = [];

function addToCart(product, price) {
    cart.push({name: product, price: price});

    alert(product + " added to cart!");

    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(function(item) {
        cartItems.innerHTML +=
            "<p>" + item.name + " - ₹" + item.price + "</p>";

        total += item.price;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

window.onload = function() {
    let savedCart = localStorage.getItem("cart");

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    if (document.getElementById("cartItems")) {
        displayCart();
    }
};
