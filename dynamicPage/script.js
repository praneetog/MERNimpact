import { items } from './api.js';

const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");
const electronics = document.getElementById("electronics");
const fashion = document.getElementById("fashion");
const homeItems = document.getElementById("homeItems");
const cardContainer = document.getElementById('cardContainer');

// Function to create cards based on filtered items
function createCards(filteredItems) {
  cardContainer.innerHTML = ''; // Clear existing cards
  filteredItems.forEach((item) => {
    // Create card elements
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = `https://shorturl.at/FRqvc`; // Set the same image for all cards
    image.alt = item.name;
    image.style.width = "100%";
    image.style.borderRadius = "8px 8px 0 0"; // Rounded top corners

    const name = document.createElement('h3');
    name.textContent = item.name;

    const category = document.createElement('p');
    category.textContent = `Category: ${item.category}`;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `Rs. ${item.price}`;

    // Append elements to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(price);

    // Append card to the container
    cardContainer.appendChild(card);
  });
}

// Dropdown menu visibility toggle
dropdownButton.addEventListener("click", () => {
  if (dropdownList.style.visibility === "hidden") {
    dropdownList.style.visibility = "visible";
  } else {
    dropdownList.style.visibility = "hidden";
  }
});

dropdownButton.addEventListener("mouseenter", () => {
  dropdownButton.style.cursor = "pointer";
});

electronics.addEventListener("mouseenter", () => {
    if(dropdownList.style.visibility === "visible") {
        electronics.style.cursor = "pointer";
    }
})

fashion.addEventListener("mouseenter", () => {
    if(dropdownList.style.visibility === "visible") {
        fashion.style.cursor = "pointer";
    }
})

homeItems.addEventListener("mouseenter", () => {
    if(dropdownList.style.visibility === "visible") {
        homeItems.style.cursor = "pointer";
    }
})

electronics.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category === 'electronics');
  createCards(filteredItems);
});

fashion.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category === 'fashion');
  createCards(filteredItems);
});

homeItems.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category === 'home items');
  createCards(filteredItems);
});

// Initial display of all items
createCards(items);
