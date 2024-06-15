// script.js
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((cartItem, index) => {
            const div = document.createElement('div');
            div.innerHTML = `${cartItem.item} - $${cartItem.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
            cartItems.appendChild(div);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    alert('Gracias por su compra. Proceda al pago seguro.');
    // Aquí puedes añadir funcionalidad para el proceso de pago.
}

// Manejo del envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:ps.mjosenavarrete@gmail.com?subject=Contacto de ${name}&body=${message}%0D%0AEmail: ${email}`;
});

// Manejo del envío del formulario de pedir hora
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('appointment-name').value;
    const email = document.getElementById('appointment-email').value;
    const date = document.getElementById('appointment-date').value;
    window.location.href = `mailto:ps.mjosenavarrete@gmail.com?subject=Solicitud de hora de ${name}&body=Nombre: ${name}%0D%0AEmail: ${email}%0D%0AFecha solicitada: ${date}`;
});
