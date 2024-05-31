// Define the navigation items
var navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Phones', href: 'phones.html' },
    { text: 'Contact', href: 'contact.html' },
    { text: 'Cart', href: 'myCart.html' },
    { text: 'About Us', href: 'about.html' },
];

// Create the nav element
var nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

// Create the icon
// Create the icon
var icon = document.createElement('img');
icon.src = 'img/icon.png'; // Replace with the URL of your icon
icon.className = 'navbar-icon'; // Add any necessary classes
icon.style.width = '45px'; // Set the width

nav.appendChild(icon);

// Create the div element
var div = document.createElement('div');
div.className = 'collapse navbar-collapse d-flex justify-content-center';
div.id = 'navbarNav';

// Create the ul element
var ul = document.createElement('ul');
ul.className = 'navbar-nav';

// Create the li and a elements for each nav item
navItems.forEach(function(item) {
    var li = document.createElement('li');
    li.className = 'nav-item';

    var a = document.createElement('a');
    a.className = 'nav-link text-dark navbttn';
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
});

// Append the ul to the div, and the div to the nav
div.appendChild(ul);
nav.appendChild(div);

// Insert the nav into the body
document.body.insertBefore(nav, document.body.firstChild);