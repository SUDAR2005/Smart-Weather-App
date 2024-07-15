document.addEventListener('DOMContentLoaded', async () => {
    let lat, lon;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;    
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

async function openMap() {
    let lat, lon;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            const popupOverlay = document.getElementById('mapPopup');
            popupOverlay.style.display = 'flex';

            const popupMap = L.map('popupMap').setView([lat, lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(popupMap);
            L.marker([lat, lon]).addTo(popupMap).bindPopup('Your Location').openPopup();
        });
    }
}

function closeMap() {
    const popupOverlay = document.getElementById('mapPopup');
    popupOverlay.style.display = 'none';
}