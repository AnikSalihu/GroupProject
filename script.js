document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartCountElem = document.getElementById('cart-count');
    const addToCartButtons = Array.from(document.querySelectorAll('.add-to-cart'));
    const products = ['Product 1', 'Product 2', 'Product 3'];

    for (let i = 0; i < products.length; i++) {
        console.log('Available:', products[i]);
    }

    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', function() {
        cartCount++;
        cartCountElem.textContent = cartCount;
    }); 
}

 });
