        // Initialize an empty cart
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Function to add an item to the cart
        function addItemToCart(item) {
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems(); // Call the function to display the cart items
        }

        // Function to display the cart items in the table
        function displayCartItems() {
            var cartTableBody = document.getElementById('cartTableBody');
            if (cartTableBody) {
                cartTableBody.innerHTML = ''; // Clear the table body
                // Iterate over the cart items
                for (var i = 0; i < cart.length; i++) {
                    var item = cart[i];
                    // Create a new table row and cells
                    var row = document.createElement('tr');
                    var nameCell = document.createElement('td');
                    var priceCell = document.createElement('td');
                    var quantityCell = document.createElement('td');
                    // Set the cell text
                    nameCell.textContent = item.name;
                    priceCell.textContent = item.price;
                    quantityCell.textContent = item.quantity;
                    // Add the cells to the row
                    row.appendChild(nameCell);
                    row.appendChild(priceCell);
                    row.appendChild(quantityCell);
                    // Add the row to the table body
                    cartTableBody.appendChild(row);
                }
            } else {
                console.error("Element with ID 'cartTableBody' not found.");
            }
        }

        // Function to clear the cart
        function clearCart() {
            cart = []; // Clear the cart array
            localStorage.removeItem('cart'); // Remove the cart from local storage
            displayCartItems(); // Update the cart table
        }

        // Attach the function to the "Add Item" button
        var addItemButton = document.getElementById('addItem');
        if (addItemButton) {
            addItemButton.addEventListener('click', function() {
                // Get the item information from the button
                var itemName = this.getAttribute('data-name');
                var itemPrice = this.getAttribute('data-price');
                var itemQuantity = this.getAttribute('data-quantity');
                // Create a new item
                var newItem = {
                    name: itemName,
                    price: parseFloat(itemPrice),
                    quantity: parseInt(itemQuantity, 10)
                };
                // Add the new item to the cart
                addItemToCart(newItem);
            });
        } else {
            console.error("Button with ID 'addItem' not found.");
        }

        // Attach the function to the "Clear Cart" button
        var clearCartButton = document.getElementById('clearCart');
        if (clearCartButton) {
            clearCartButton.addEventListener('click', clearCart);
        } else {
            console.error("Button with ID 'clearCart' not found.");
        }

        // Display the cart items when the page loads
        window.onload = displayCartItems;