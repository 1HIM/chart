document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            total += price * quantity;
        });
        totalPriceElement.innerText = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const minusButton = item.querySelector('.minus');
        const plusButton = item.querySelector('.plus');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantityElement = item.querySelector('.quantity');

        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantity--;
                quantityElement.innerText = quantity;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            quantity++;
            quantityElement.innerText = quantity;
            updateTotalPrice();
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});
