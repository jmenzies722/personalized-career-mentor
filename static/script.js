async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput) return;

  // Display user message in chatbox
  const chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

  // Send message to backend
  const response = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput })
  });
  const data = await response.json();

  // Display chatbot response
  chatbox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
  document.getElementById('user-input').value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}
