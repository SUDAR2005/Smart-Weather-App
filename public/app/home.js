document.addEventListener('DOMContentLoaded', async () => {
    let lat, lon;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            try {
                const response = await fetch(`/weather?lat=${lat}&lon=${lon}`);
                const data = await response.json();
                document.getElementById('high').innerText = data.name;
                document.getElementById('temprature-field').innerText = data.main.temp + '°C';
                document.getElementById('humidity-field').innerText = data.main.humidity + ' g/mc';
                document.getElementById('location-field').innerText = `${lat} & ${lon}`;
            } catch (err) {
                console.error('Error fetching weather data:', err);
            }
            
            // Initialize main map
            const mainMap = L.map('map').setView([lat, lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mainMap);
            L.marker([lat, lon]).addTo(mainMap).bindPopup('Your Location').openPopup();
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});