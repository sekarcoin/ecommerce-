(Frontend JavaScript for Cart Management)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h2').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));

        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        };

        const existingProductIndex = cart.findIndex(p => p.id === productId);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    });
});

