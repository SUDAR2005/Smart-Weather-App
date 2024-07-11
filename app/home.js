document.addEventListener('DOMContentLoaded', (event) => {
    const mainMap = L.map('map').setView([9.9197, 78.1194], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mainMap);
    L.marker([9.9197, 78.1194]).addTo(mainMap)
        .bindPopup('Madurai')
        .openPopup();
});

function openMap() {
    const popupOverlay = document.getElementById('mapPopup');
    popupOverlay.style.display = 'flex';

    // Initialize the popup map
    const popupMap = L.map('popupMap').setView([9.9197, 78.1194], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(popupMap);

    L.marker([9.9197, 78.1194]).addTo(popupMap)
        .bindPopup('Madurai')
        .openPopup();
}

function closeMap() {
    const popupOverlay = document.getElementById('mapPopup');
    popupOverlay.style.display = 'none';
}
