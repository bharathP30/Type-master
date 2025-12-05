const quoteDisplay = document.querySelector("#quote");
const typedText = document.querySelector("#typedText");
const timeDisplay = document.querySelector("#time");
const wpmDisplay = document.querySelector("#wpm");
const feedback = document.querySelector("#feedback");
const accuracy = document.querySelector("#accuracy");
const restartBtn = document.querySelector("#restartBtn");

const history = document.querySelector("#historyBtn");
history.addEventListener("click", loadStuff);

const clear = document.querySelector("#clearBtn");
clear.addEventListener("click", clearStuff);

const quotes = [
  "the quick brown fox jumps over the lazy dog",
  "practice makes progress not perfect",
  "javascript is weird but powerful",
  "hello world is where it begins",
  "discipline beats motivation every time"
];

let startTime = null;
let interval = null;
// Start timer on first key press
typedText.addEventListener("input", () => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
  }

  // Check if text is fully typed
  if (typedText.value === quoteDisplay.textContent) {
    clearInterval(interval);
    showResults();
  }
});

// Updates the timer every second
function updateTime() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  timeDisplay.textContent = elapsed;
}

// Show final results
function showResults() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const quoteText = quoteDisplay.textContent.trim();
  const total = quoteText.length;
  const typed = typedText.value.trim();

 timeDisplay.textContent = elapsed;

  // Count matching characters
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === quoteText[i]) {
      correct++;
    }
  }
  const accuracyPercent = total > 0 ? Math.round((correct / total) * 100) : 0;

  // WPM calc
  const words = quoteText.split(" ").length;
  const WPM = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;

  // Update UI
  wpmDisplay.textContent = WPM;
  accuracy.textContent = accuracyPercent + "%";
  saveStuff();

 // Feedback for WPM
let wpmMsg = "";
if (WPM > 80) wpmMsg = "🔥 Godspeed!";
else if (WPM > 50) wpmMsg = "🚀 Fast and smooth!";
else if (WPM > 30) wpmMsg = "🧠 Getting there.";
else wpmMsg = "🐢 Type like you mean it.";

// Feedback for Accuracy
let accMsg = "";
if (accuracyPercent > 95) accMsg = "🎯 Near perfect!";
else if (accuracyPercent > 80) accMsg = "👌 Solid accuracy";
else if (accuracyPercent > 60) accMsg = "⚠️ Watch the typos";
else accMsg = "💀 Type with your eyes open bro";

feedback.innerHTML = `
  <span style="color: orange;">${wpmMsg}</span><br>
  <span style="color: lightgreen;">${accMsg}</span>
`;
}

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Reset button logic
restartBtn.addEventListener("click", () => {
  typedText.value = "";
  timeDisplay.textContent = "0";
  wpmDisplay.textContent = "0";
  feedback.innerHTML = "—";
  accuracy.textContent = "0%";
  clearInterval(interval);
  startTime = null;
 
  const newQuote = getRandomQuote();
  quoteDisplay.textContent = newQuote;

});

function saveStuff() {
  const feedA = document.querySelector("#wpm").textContent;
  const feedB = document.querySelector("#accuracy").textContent;
  const feedC = document.querySelector("#time").textContent;
  let stuff = JSON.parse(localStorage.getItem("Data")) || [];

  stuff.unshift({
    Wpm : feedA,
    accuracy : feedB,
    time : feedC
  });
  stuff = stuff.slice(0,5);
  localStorage.setItem("Data", JSON.stringify(stuff));
}

function loadStuff() {
  const data = JSON.parse(localStorage.getItem("Data")) || [];
  const output = document.querySelector("#historyOutput");
  if (data.length === 0) {
    output.innerHTML = "<p>No history yet.</p>";
    return;
  }
  output.innerHTML = "<h3>History</h3>";
  data.forEach((entry, index) => {
    output.innerHTML += `
      <p>
        <strong>Attempt ${index + 1}</strong><br>
        Time: ${entry.time}s<br>
        WPM: ${entry.Wpm} <br>
        Accuracy: ${entry.accuracy}
      </p>
      <hr>
    `;
  });
}

function clearStuff() {
  localStorage.removeItem("Data"); // ✅ removes the key entirely
  document.querySelector("#historyOutput").innerHTML = "<p>History cleared.</p>"; // optional
}

window.addEventListener('DOMContentLoaded', () => {
  quoteDisplay.textContent = getRandomQuote();
});