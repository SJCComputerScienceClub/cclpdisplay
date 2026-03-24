
const questions = [
  {
    question: "What does CCLP stand for?",
    options: ["Cadet Corps Leadership Program", "Central Command Learning Plan", "Cadet Code Logistics Plan", "None"],
    answer: 0
  },
  {
    question: "What is leadership?",
    options: ["Power", "Influence", "Control", "Authority"],
    answer: 1
  },
  {
    question: "Which is a key leadership trait?",
    options: ["Laziness", "Integrity", "Silence", "Speed"],
    answer: 1
  },

  // STUDENTS CAN ADD UNLIMITED QUESTIONS HERE
];


/* 
   GAME LOGIC
 */

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

/* RANDOMLY PICK 5 QUESTIONS */
function getRandomQuestions() {
  let shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

/* START GAME */
function startGame() {
  document.getElementById("results").style.display = "none";
  document.getElementById("intro").style.display = "block";

  selectedQuestions = getRandomQuestions();
  currentIndex = 0;
  score = 0;

  startCountdown();
}

/* COUNTDOWN */
function startCountdown() {
  let count = 5;
  const countdownEl = document.getElementById("countdown");

  const timer = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count === 0) {
      clearInterval(timer);
      document.getElementById("intro").style.display = "none";
      document.getElementById("quiz-box").style.display = "block";
      loadQuestion();
    }
  }, 1000);
}

/* LOAD QUESTION */
function loadQuestion() {
  selectedAnswer = null;

  const q = selectedQuestions[currentIndex];
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
}

/* SUBMIT ANSWER */
function submitAnswer() {
  if (selectedAnswer === null) return;

  if (selectedAnswer === selectedQuestions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

/* SHOW RESULTS */
function showResults() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("results").style.display = "block";

  document.getElementById("score").textContent = `Score: ${score} / 5`;

  let message = "";

  /* 
     RESULT MESSAGES (STUDENTS EDIT)
     */
  if (score === 5) {
    message = "🏆 Outstanding performance! Promotion approved.";
  } else if (score >= 3) {
    message = "👍 Solid effort. Review and try again.";
  } else {
    message = "⚠️ Additional training required. Try again.";
  }

  document.getElementById("result-message").textContent = message;
}

/* EXIT GAME */
function exitGame() {
  window.location.href = "index.html";
}

/* INIT */
startGame();

