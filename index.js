import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
  const cart = [];  // Array to store cart items

  // Get all the Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Find the product details related to the clicked button
      const card = e.target.closest('.card');
      const productName = card.querySelector('.card-title').textContent;
      const productDescription = card.querySelector('.card-text').textContent;
      const productPrice = card.querySelector('.h5').textContent;
      const productImage = card.querySelector('.card-img-top').src;

      // Add the product to the cart
      const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
      };

      cart.push(product);  // Add the product to the cart array

      console.log('Product Added to Cart:', product);
      alert('Product added to cart successfully!');
    });
  });
});
