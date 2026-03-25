const questions = [
  { question: "What does CCLP stand for?", options: ["Cadet Corps Leadership Program", "Central Command Learning Plan", "Cadet Code Logistics Plan", "None"], answer: 0 },
  { question: "What is leadership?", options: ["Power", "Influence", "Control", "Authority"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },
  { question: "Which is a key leadership trait?", options: ["Laziness", "Integrity", "Silence", "Speed"], answer: 1 },

  // Add unlimited questions here
];

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

function getRandomQuestions() {
  let shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(5, questions.length));
}

function startGame() {
  document.getElementById("results").style.display = "none";
  document.getElementById("intro").style.display = "block";
  selectedQuestions = getRandomQuestions();
  currentIndex = 0;
  score = 0;
  startCountdown();
}

function startCountdown() {
  let count = 5;
  const countdownEl = document.getElementById("countdown");

  const timer = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count === 0) {
      clearInterval(timer);

      document.getElementById("intro").style.display = "none";

      const quizBox = document.getElementById("quiz-box");
      quizBox.style.display = "block";

      // FORCE visibility immediately
      quizBox.style.opacity = "1";

      loadQuestion();
    }
  }, 1000);
}

ffunction loadQuestion() {
  selectedAnswer = null;

  const q = selectedQuestions[currentIndex];
  console.log("Loading question:", q);

  if (!q) {
    console.error("Question not found at index:", currentIndex);
    return;
  }

  const quizBox = document.getElementById("quiz-box");

  // Load content FIRST
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.onclick = () => {
      document.querySelectorAll(".answers button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = index;
    };

    answersDiv.appendChild(btn);
  });

  // Animate
  quizBox.classList.remove("show");

  requestAnimationFrame(() => {
    quizBox.classList.add("show");
  });
}

function submitAnswer() {
  if (selectedAnswer === null) return;
  if (selectedAnswer === selectedQuestions[currentIndex].answer) score++;
  currentIndex++;
  if (currentIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizBox = document.getElementById("quiz-box");
  quizBox.classList.remove("show");
  setTimeout(() => {
    quizBox.style.display = "none";
    const results = document.getElementById("results");
    results.style.display = "block";
    results.style.opacity = 0;
    setTimeout(() => results.style.opacity = 1, 50);
    document.getElementById("score").textContent = `Score: ${score} / 5`;
    let message = "";
    if (score === 5) message = "🏆 Outstanding performance! Promotion approved.";
    else if (score >= 3) message = "👍 Solid effort. Review and try again.";
    else message = "⚠️ Additional training required. Try again.";
    document.getElementById("result-message").textContent = message;
  }, 300);
}

function exitGame() {
  window.location.href = "index.html";
}

startGame();