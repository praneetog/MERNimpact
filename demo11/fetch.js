// let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then((data) => {
//     return (data.json());
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

const url = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API URL
const userContainer = document.getElementById('user-container');

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Iterate through each user and create HTML content
        data.forEach((user) => {
            const userDiv = document.createElement('div'); // Create a container for each user
            userDiv.classList.add('user'); // Add a class for styling
            const details = `
                <h3>${user.name}</h3>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;

            userDiv.innerHTML += details; // Add user details to the container 
            
            userContainer.appendChild(userDiv); // Append the user data to the container
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        userContainer.innerHTML = `<p>Failed to load user data. Please try again later.</p>`;
    });
