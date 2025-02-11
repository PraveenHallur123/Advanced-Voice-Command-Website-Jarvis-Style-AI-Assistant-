const startButton = document.getElementById("startButton");
const output = document.getElementById("output");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;

startButton.addEventListener("click", () => {
    recognition.start();
    output.textContent = "Listening...";
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.textContent = `You said: "${transcript}"`;

    // Command Actions
    if (transcript.includes("open google")) {
        output.textContent = "Opening Google...";
        window.open("https://www.google.com", "_blank");

    } else if (transcript.includes("open youtube")) {
        output.textContent = "Opening YouTube...";
        window.open("https://www.youtube.com", "_blank");

    } else if (transcript.includes("open github")) {
        output.textContent = "Opening GitHub...";
        window.open("https://github.com", "_blank");

    } else if (transcript.includes("open wikipedia")) {
        output.textContent = "Opening Wikipedia...";
        window.open("https://wikipedia.org", "_blank");

    } else if (transcript.includes("play music")) {
        output.textContent = "Playing music...";
        window.open("https://open.spotify.com", "_blank");

    } else if (transcript.includes("what is the time")) {
        const time = new Date().toLocaleTimeString();
        output.textContent = `Current time is: ${time}`;

    } else if (transcript.includes("what is the date")) {
        const date = new Date().toDateString();
        output.textContent = `Today's date is: ${date}`;

    } else if (transcript.includes("tell me a joke")) {
        const jokes = [
            "Why don't programmers like nature? Because it has too many bugs!",
            "Why do Java developers wear glasses? Because they can't C#!",
            "Parallel lines have so much in common. It’s a shame they’ll never meet."
        ];
        output.textContent = jokes[Math.floor(Math.random() * jokes.length)];

    } else if (transcript.includes("change theme")) {
        output.textContent = "Changing theme...";
        document.body.style.backgroundColor = getRandomColor();

    } else if (transcript.includes("who are you")) {
        output.textContent = "I am Jarvis, your AI assistant!";

    } else {
        output.textContent = "Command not recognized!";
    }
};

// Generate a random theme color
function getRandomColor() {
    const colors = ["#0ff", "#00f", "#f0f", "#ff0", "#f00"];
    return colors[Math.floor(Math.random() * colors.length)];
}

recognition.onerror = (event) => {
    output.textContent = "Error: " + event.error;
};
