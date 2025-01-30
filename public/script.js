document.getElementById('send-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') return;

  // Display user message
  appendMessage('user', userInput);

  // Clear input
  document.getElementById('user-input').value = '';

  // Get bot response
  const response = await fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();
  appendMessage('bot', data.reply);
});

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);

  // Add avatar
  const avatar = document.createElement('img');
  avatar.src = sender === 'user' ? '../images/zoro.png' : '../images/bot.jpg';
  avatar.alt = sender === 'user' ? 'User Avatar' : 'Bot Avatar';
  avatar.classList.add('avatar');
  messageElement.appendChild(avatar);

  // Add message content
  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  messageContent.innerHTML = `<p>${message}</p><span class="timestamp">${new Date().toLocaleTimeString()}</span>`;
  messageElement.appendChild(messageContent);

  // Append to chat box
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}