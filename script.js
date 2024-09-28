// script.js

// Add an event listener to redirect to the booking page
document.querySelector('.appointment-btn').addEventListener('click', function() {
    window.location.href = 'appointment.html'; // Redirect to the booking page
});



// Get the confirm slot button and the modal
const confirmSlotBtn = document.querySelector('.confirm-slot-btn');
const confirmationPopup = document.getElementById('confirmationPopup');
const closePopupBtn = document.getElementById('closePopup');

// Event listener for Confirm Slot button
confirmSlotBtn.addEventListener('click', function() {
    // Display the pop-up
    confirmationPopup.style.display = 'flex';
});

// Event listener for Close button in the pop-up
closePopupBtn.addEventListener('click', function() {
    // Close the pop-up
    confirmationPopup.style.display = 'none';
});
