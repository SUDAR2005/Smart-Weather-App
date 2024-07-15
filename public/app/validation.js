
// Google Maps integration using Leaflet.js and OpenStreetMap
var map = L.map('map').setView([9.9252, 78.1198], 13); // Coordinates for Madurai
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    
L.marker([9.9252, 78.1198]).addTo(map)
    .bindPopup('Madurai')
    .openPopup();
    
// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Validation for name field
    if (!name || name.trim() === '') {
alert('Please enter your name.');
return;
    }
    
    if (!email || email.trim() === '') {
alert('Please enter your email.');
return;
    }
    
    if (!subject || subject.trim() === '') {
alert('Please enter the subject.');
return;
    }
    
    if (!message || message.trim() === '') {
alert('Please enter your message.');
return;
    }
    
    // If all fields are valid, submit the form
    alert('Form submitted successfully!');
    // You can add additional logic here to submit the form data to a server if needed
});