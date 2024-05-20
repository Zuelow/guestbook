document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('guestbook-form');
  const entriesContainer = document.getElementById('guestbook-entries');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value;
    const message = messageInput.value;
    
    if (name.trim() === '' || message.trim() === '') {
      alert('Please enter both your name and a message.');
      return;
    }
    
    const entry = document.createElement('div');
    entry.classList.add('guestbook-entry');
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    entry.appendChild(nameElement);
    entry.appendChild(messageElement);
    
    entriesContainer.appendChild(entry);
    
    nameInput.value = '';
    messageInput.value = '';
  });
});
