var products = [
    { name: 'Phone 1', price: 500 },
    { name: 'Phone 2', price: 600 },
    { name: 'Phone 3', price: 700 },
];

var productsContainer = document.getElementById('products');

products.forEach(function(product) {
    var productCard = document.createElement('div');
    productCard.className = 'product-card';

    var productName = document.createElement('h2');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    var productPrice = document.createElement('p');
    productPrice.textContent = 'Price: $' + product.price;
    productCard.appendChild(productPrice);

    var buyButton = document.createElement('button');
    buyButton.textContent = 'Buy Now';
    buyButton.addEventListener('click', function() {
        alert('You have bought ' + product.name);
    });
    productCard.appendChild(buyButton);

    productsContainer.appendChild(productCard);
});