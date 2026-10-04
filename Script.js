let cart = [];

function addToCart(product, price) {
    cart.push({name: product, price: price});
    alert(product + " added to cart!");
}
