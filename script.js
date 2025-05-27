document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartCountElem = document.getElementById('cart-count');
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            cartCount++;
            cartCountElem.textContent = cartCount;
        });
    });
});
