// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

// Select the message container
const statusMessage = document.getElementById('status-message');

// Check status and set the message and styling
if (status === 'success') {
  statusMessage.textContent = 'Transaction Successful';
  statusMessage.classList.add('success');
} else if (status === 'fail') {
  statusMessage.textContent = 'Transaction Failed';
  statusMessage.classList.add('fail');
} else {
  statusMessage.textContent = 'Invalid Transaction Status';
}