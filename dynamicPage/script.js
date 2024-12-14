import { items } from './api.js';

const dropdown = document.querySelector("select");
const cardContainer = document.getElementById('cardContainer');

// Function to create cards based on filtered items
function createCards(filteredItems) {
  cardContainer.innerHTML = ''; // Clear existing cards
  filteredItems.forEach((item) => {
    const cardHTML = `
      <div class="card">
        <img src=${item.link} alt="${item.name}" style="width: 100%; border-radius: 8px 8px 0 0;">
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p class="price">Rs. ${item.price}</p>
        <div>
          <button class="addToCart" class="btn">Add to Cart</button>
          <button class="buyNow" style="" class="btn">Buy Now</button>
        </div>
      </div>
    `;
    cardContainer.innerHTML += cardHTML;
    });
}

dropdown.addEventListener("change", () => {
    const selectedCategory = dropdown.value;
    if (selectedCategory === 'All') {
      createCards(items);
    } else {
      const filteredItems = items.filter(item => item.category === selectedCategory);
      createCards(filteredItems);
    }
  });

// Initial display of all items
createCards(items);
