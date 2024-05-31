var products = [
    { name: 'iPhone 13 Pro', price: 500, link: 'phone1.html' },
    { name: 'Samsung Galaxy S21 Ultra', price: 600, link: 'phone2.html' },
    { name: 'Pixel 8 Pro', price: 700, link: 'phone3.html' },
    { name: 'HUAWEI Pura 70 Ultra', price: 800, link: 'phone4.html' },
    { name: 'Xiaomi Mi 14 Ultra', price: 900, link: 'phone5.html' },
    { name: 'OnePlus 12', price: 1000, link: 'phone6.html' },
];

var productsContainer = document.getElementById('products');

products.forEach(function(product) {
    var productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.padding = '15px';
    productCard.style.margin = '15px';
    productCard.style.width = '250px';
    productCard.style.height = '300px';
    productCard.style.display = 'flex';
    productCard.style.justifyContent = 'space-between';

    var productName = document.createElement('h2');
    productName.textContent = product.name;
    productName.style.color = 'white';
    productCard.appendChild(productName);

    var productPrice = document.createElement('p');
    productPrice.textContent = 'Price: $' + product.price;
    productPrice.style.fontWeight = 'bold';
    productCard.appendChild(productPrice);

    var buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-between';

    var buyButton = document.createElement('button');
    buyButton.textContent = 'Buy Now';
    buyButton.style.backgroundColor = '#4f4f4f';
    buyButton.style.color = 'white';
    buyButton.addEventListener('click', function() {
        window.location.href = product.link;
    });
    buttonsContainer.appendChild(buyButton);

    productCard.appendChild(buttonsContainer);

    productsContainer.appendChild(productCard);
});
