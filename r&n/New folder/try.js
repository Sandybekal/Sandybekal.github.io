function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (userInput.value !== "") {
      const userMessage = userInput.value;

      // Display user message
      const userDiv = document.createElement("div");
      userDiv.className = "message user-message";
      userDiv.innerHTML = `<p>${userMessage}</p>`;
      chatBox.appendChild(userDiv);

      // Process user message and provide bot response
      const botResponse = generateBotResponse(userMessage);

      // Display bot response
      const botDiv = document.createElement("div");
      botDiv.className = "message bot-message";
      botDiv.innerHTML = `<p>${botResponse}</p>`;
      chatBox.appendChild(botDiv);

      // Clear user input
      userInput.value = "";

      // Scroll to the bottom of the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  function generateBotResponse(userMessage) {
    // Simple logic to ask financial questions and provide suggestions
    let botResponse = "";

    if (userMessage.toLowerCase().includes("income")) {
      botResponse = "What is your monthly income?";
    } else if (userMessage.toLowerCase().includes("expenses")) {
      botResponse = "What are your major monthly expenses?";
    } else if (userMessage.toLowerCase().includes("savings")) {
      botResponse = "How much do you save each month?";
    } else {
      botResponse = "I'm a simple financial bot. Please provide more information for better suggestions.";
    }

    return botResponse;
  }