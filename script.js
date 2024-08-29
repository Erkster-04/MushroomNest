// Example JavaScript for basic interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Example: Show an alert when the 'Add to Cart' button is clicked
    const addToCartButton = document.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    }

    // Example: Toggle mobile menu (if you plan to add a responsive menu)
    const menuToggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
