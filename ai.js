async function getBotResponse(userInput) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk--z5Apdxxy4lU7v5Wpfhbl7lOJad5cGb7diIVR6R2WaT3BlbkFJwKGGqhmgpidCrbVp-69adu1J_UilRr707fKU5_rMIA'
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

document.getElementById('send-btn').addEventListener('click', async function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        var userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = '<div class="message-content">' + userInput + '</div>';
        document.getElementById('chat-container').appendChild(userMessage);
        document.getElementById('user-input').value = '';

        var botResponse = await getBotResponse(userInput);
        var botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = '<div class="message-content">' + botResponse + '</div>';
        document.getElementById('chat-container').appendChild(botMessage);
    }
});
