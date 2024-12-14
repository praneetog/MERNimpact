const url = 'https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=vadodara'
const container = document.getElementById('container');

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Iterate through each user and create HTML content
        data.forEach((user) => {
            const userDiv = document.createElement('div'); // Create a container for each user
            userDiv.classList.add('weather'); // Add a class for styling
            const details = `
                <h3>${weather.location.name}, ${weather.location.region}, ${weather.location.country}</h3>
                <p><strong>Current Temperature (C) : </strong> ${weather.current.temp_c}, Feels like : ${weather.feelslike_c}</p>
                <p><strong>Current Temperature (F) : </strong> ${weather.current.temp_f}, Feels like : ${weather.feelslike_f}</p>
                <div>
                    <img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}">
                    <p><strong>Condition :</strong> ${weather.current.condition.text}</p>
                </div>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;

            userDiv.innerHTML += details; // Add user details to the container 
            
            container.appendChild(userDiv); // Append the user data to the container
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        container.innerHTML = `<p>Failed to load user data. Please try again later.</p>`;
    });