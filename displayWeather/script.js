async function getWeather() {
    const city = document.getElementById('city').value;
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous results

    if (!city) {
        container.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const weather = await response.json();

        const weatherDiv = document.createElement('div');
        weatherDiv.classList.add('weather'); // Add class

        weatherDiv.innerHTML = `
            <h3>${weather.location.name}, ${weather.location.region}, ${weather.location.country}</h3>
            <p><strong>Current Temperature (C):</strong> ${weather.current.temp_c}°C, Feels like: ${weather.current.feelslike_c}°C</p>
            <p><strong>Current Temperature (F):</strong> ${weather.current.temp_f}°F, Feels like: ${weather.current.feelslike_f}°F</p>
            <div>
                <img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}">
                <p><strong>Condition:</strong> ${weather.current.condition.text}</p>
            </div>
        `;

        container.appendChild(weatherDiv);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        container.innerHTML = `<p>Failed to load weather data. Please try again later.</p>`;
    }
}
