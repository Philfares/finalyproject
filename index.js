document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.querySelector('.total-price .total');

    function updateTotalPrice() {
        let totalPrice = 0;
        const items = cart.getElementsByClassName('cart-item');
        Array.from(items).forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    cart.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-plus-circle')) {
            const quantityElement = e.target.nextElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent, 10) + 1;
        } else if (e.target.classList.contains('fa-minus-circle')) {
            const quantityElement = e.target.previousElementSibling;
            const newQuantity = parseInt(quantityElement.textContent, 10) - 1;
            if (newQuantity > 0) {
                quantityElement.textContent = newQuantity;
            }
        } else if (e.target.classList.contains('fa-trash-alt')) {
            e.target.closest('.cart-item').remove();
        } else if (e.target.classList.contains('fa-heart')) {
            e.target.classList.toggle('liked');
        }
        updateTotalPrice();
    });

    updateTotalPrice();
});
