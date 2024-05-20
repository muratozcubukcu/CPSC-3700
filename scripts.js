var products = [
    { name: 'iPhone 13 Pro', price: 500, link: 'Phone1.html' },
    { name: 'Samsung Galaxy S21 Ultra', price: 600, link: 'Phone2.html' },
    { name: 'Pixel 8 Pro', price: 700, link: 'Phone3.html' },
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
        window.location.href = product.link;
    });
    productCard.appendChild(buyButton);

    productsContainer.appendChild(productCard);
});

