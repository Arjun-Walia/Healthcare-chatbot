let userData = {
  heartRate: 75,
  steps: 5000,
  sleepHours: 7,
  location: "New York, USA",
  history: [],
  mood: null,
};

const chartCanvas = document.getElementById("data-chart").getContext("2d");
let dataChart;

const motivationalQuotes = [
  "The greatest wealth is health.",
  "Take care of your body. It’s the only place you have to live.",
  "Health is not about the weight you lose, but about the life you gain.",
  "Your body hears everything your mind says.",
  "The best project you'll ever work on is you.",
  "Small steps every day lead to big results.",
  "Believe you can and you're halfway there.",
  "Every day is a new opportunity to change your life.",
  "The only way to do great work is to love what you do.",
  "Be stronger than your excuses.",
];

function generateRandomData() {
  return {
    heartRate: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
    steps: Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000,
    sleepHours: Math.floor(Math.random() * (9 - 5 + 1)) + 5,
    location: [
      "New York, USA",
      "London, UK",
      "Tokyo, Japan",
      "Paris, France",
      "Sydney, Australia",
    ][Math.floor(Math.random() * 5)],
  };
}

function updateData() {
  const newData = generateRandomData();
  userData.heartRate = newData.heartRate;
  userData.steps = newData.steps;
  userData.sleepHours = newData.sleepHours;
  userData.location = newData.location;

  userData.history.push({
    time: new Date().toLocaleTimeString(),
    heartRate: userData.heartRate,
    steps: userData.steps,
    sleepHours: userData.sleepHours,
  });

  updateDisplay();
  updateChart();
  updateAnalysis();
  updateStepProgress();
  updateQuote();
}

function updateDisplay() {
  document.getElementById("heart-rate-display").textContent =
    userData.heartRate;
  document.getElementById("steps-display").textContent = userData.steps;
  document.getElementById("sleep-hours-display").textContent =
    userData.sleepHours;
  document.getElementById("location-display").textContent = userData.location;
}

function updateAnalysis() {
  if (userData.history.length === 0) return;

  const totalHeartRate = userData.history.reduce(
    (sum, entry) => sum + entry.heartRate,
    0
  );
  const avgHeartRate = (totalHeartRate / userData.history.length).toFixed(2);
  const totalSteps = userData.history.reduce(
    (sum, entry) => sum + entry.steps,
    0
  );
  const totalSleepHours = userData.history.reduce(
    (sum, entry) => sum + entry.sleepHours,
    0
  );
  const avgSleepHours = (totalSleepHours / userData.history.length).toFixed(2);

  document.getElementById("avg-heart-rate").textContent = avgHeartRate;
  document.getElementById("total-steps").textContent = totalSteps;
  document.getElementById("avg-sleep-hours").textContent = avgSleepHours;
}

function updateChart() {
  if (dataChart) {
    dataChart.destroy();
  }

  const labels = userData.history.map((entry) => entry.time);
  const heartRateData = userData.history.map((entry) => entry.heartRate);
  const stepsData = userData.history.map((entry) => entry.steps);
  const sleepHoursData = userData.history.map((entry) => entry.sleepHours);

  dataChart = new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Heart Rate",
          data: heartRateData,
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
        {
          label: "Steps",
          data: stepsData,
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
        {
          label: "Sleep Hours",
          data: sleepHoursData,
          borderColor: "rgba(255, 206, 86, 1)",
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function updateStepProgress() {
  const stepGoal = 10000;
  const progress = Math.min(userData.steps / stepGoal, 1) * 100;
  document.getElementById("step-progress").style.width = `${progress}%`;
  document.getElementById(
    "step-progress-text"
  ).textContent = `${userData.steps} / ${stepGoal} steps`;
}

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  document.getElementById("motivational-quote").textContent =
    motivationalQuotes[randomIndex];
}

updateData();
setInterval(updateData, 5000);

document.querySelectorAll(".mood-emoji").forEach((emoji) => {
  emoji.addEventListener("click", () => {
    userData.mood = emoji.dataset.mood;
    document.getElementById(
      "mood-display"
    ).textContent = `You're feeling ${userData.mood}`;
  });
});

document.getElementById("send-btn").addEventListener("click", async () => {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Display user message
  appendMessage("user", userInput);

  // Clear input
  document.getElementById("user-input").value = "";

  // Get bot response
  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userInput, userData: userData }),
  });

  const data = await response.json();
  appendMessage("bot", data.reply, data.severity);
});

function appendMessage(sender, message, severity) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);

  // Add avatar
  const avatar = document.createElement("img");
  avatar.src = sender === "user" ? "images/zoro.png" : "images/bot.jpg";
  avatar.classList.add("avatar");
  messageElement.appendChild(avatar);

  // Add message content
  const messageContent = document.createElement("div");
  messageContent.classList.add("message-content");

  let severityText = severity
    ? `<span class="severity">(${severity})</span> `
    : "";

  messageContent.innerHTML = `<p>${severityText}${message}</p><span class="timestamp">${new Date().toLocaleTimeString()}</span>`;
  messageElement.appendChild(messageContent);

  // Append to chat box
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("emergency-btn").addEventListener("click", () => {
  alert("Emergency services contacted. Location shared: " + userData.location);
});

// Theme toggle functionality
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});
