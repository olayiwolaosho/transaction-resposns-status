// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

// Select elements
const statusContainer = document.querySelector('.status-container');
const statusMessage = document.getElementById('status-message');

// Check status and set the message and styling
if (status === 'success') {
  statusMessage.textContent = 'Transaction Successful';
  statusContainer.classList.add('success');
} else if (status === 'fail') {
  statusMessage.textContent = 'Transaction Failed';
  statusContainer.classList.add('fail');
} else {
  statusMessage.textContent = 'Invalid Transaction Status';
}
