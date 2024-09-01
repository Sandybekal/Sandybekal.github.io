function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (userInput.value !== "") {
    const userMessage = userInput.value;

    const userDiv = document.createElement("div");
    userDiv.className = "message user-message";
    userDiv.innerHTML = `<p>${userMessage}</p>`;
    chatBox.appendChild(userDiv);

    fetch('/send_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `user_message=${userMessage}`,
    })
    .then(response => response.json())
    .then(data => {
      const botResponse = data.bot_response;

      const botDiv = document.createElement("div");
      botDiv.className = "message bot-message";
      botDiv.innerHTML = `<p>${botResponse}</p>`;
      chatBox.appendChild(botDiv);

      userInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }
}
