
const questionInput = document.getElementById("question");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

const quickButtons = document.querySelectorAll(".quick-button");
const campusButtons = document.querySelectorAll(".campus-button");

// Add a message to the chat window
function addMessage(sender, message) {
    const messageDiv = document.createElement("div");

    if (sender === "You") {
        messageDiv.className = "user-message";
    } else {
        messageDiv.className = "bot-message";
    }

    const label = document.createElement("strong");
    label.textContent = sender + ": ";

    const text = document.createElement("span");
    text.textContent = message;

    messageDiv.appendChild(label);
    messageDiv.appendChild(text);
    chatMessages.appendChild(messageDiv);
}

// Temporary demo responses
function getDemoReply(message) {
    const text = message.toLowerCase();

    if (text.includes("timetable") ||
        text.includes("class") ||
        text.includes("schedule")) {

        return "Please tell me your section (for example, CSE2) and the day. Live timetable data will be connected through Flask and MySQL later.";
    }

    if (text.includes("syllabus")) {
        return "You can find your subject syllabus in the Syllabus section. Drive links will be connected later.";
    }

    if (text.includes("notice") ||
        text.includes("announcement")) {

        return "College notices will appear here once the database is connected.";
    }

    if (text.includes("faq") ||
        text.includes("frequently asked")) {

        return "You can find common campus questions in the FAQ section.";
    }

    if (text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")) {

        return "Hello! Ask me about your timetable, syllabus, notices, or FAQs.";
    }

    return "I am your Smart Campus Assistant demo. Gemini AI will be connected through Flask later.";
}

// Send a message
function sendMessage() {
    const message = questionInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage("You", message);

    questionInput.value = "";

    const reply = getDemoReply(message);

    addMessage("Assistant", reply);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send button click
sendButton.addEventListener("click", sendMessage);

// Press Enter to send
questionInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Quick Questions buttons
quickButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        questionInput.value = button.dataset.question;
        sendMessage();
    });
});

// Campus resource buttons
campusButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        questionInput.value = button.dataset.question;
        sendMessage();
    });
});