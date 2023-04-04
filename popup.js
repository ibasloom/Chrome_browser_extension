// Wait for the popup to load
document.addEventListener("DOMContentLoaded", function() {
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
});

// Update the date and time
function updateDateTime() {
  // Get the current date and time
  var now = new Date();
  
  // Update the date and time in the popup
  document.getElementById("date").textContent = now.toLocaleDateString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}
