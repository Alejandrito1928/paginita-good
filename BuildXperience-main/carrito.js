// carrito.js

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const totalElement = document.getElementById('total');

    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío 😢</p>';
        totalElement.textContent = 'Total: $0';
        return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(productoDiv);
    });

    totalElement.textContent = `Total: $${total}`;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

document.getElementById('comprar-btn').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('¡No tienes productos en el carrito!');
    } else {
        alert('¡Gracias por tu compra! 🎉');
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
});

// Mostrar el carrito al cargar la página
mostrarCarrito();
