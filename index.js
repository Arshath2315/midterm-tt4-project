import './index.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');
    const cartCounter = document.getElementById('cart-counter'); // Add a cart counter element
    let cart = []; // Initialize the cart as an empty array

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt,
            price: 499.99
        },
        {
            name: 'Canon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen,
            price: 599.99
        },
        {
            name: 'Nikon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini,
            price: 699.99
        }
    ];

    // Function to update the cart counter
    function updateCartCounter() {
        cartCounter.textContent = cart.length; // Update cart counter text with the number of items
    }

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-text', 'text-muted');
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'float-end');
        addToCart.textContent = "Add to Cart";

        // Button click handler
        addToCart.addEventListener('click', () => {
            console.log('Add to Cart clicked for:', product.name); // Add this to check if the click is working
            cart.push(product); // Add the product to the cart array
            updateCartCounter(); // Update the cart count
            alert(`${product.name} has been added to the cart!`); // Optional: Show a message
        });
        

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });

    updateCartCounter(); // Initialize the cart counter

});
