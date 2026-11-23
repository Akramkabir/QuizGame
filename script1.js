//10 Software Engineering & Computing Quiz Questions
const quizQuestions = [
  {
    question: "Which Git command is used to record staged changes into the local repository history?",
    options: ["git push", "git commit", "git save", "git merge"],
    correctIndex: 1
  },
  {
    question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Binary Search Tree", "Hash Map"],
    correctIndex: 1
  },
  {
    question: "What does the HTTP 404 status code indicate?",
    options: [
      "Internal Server Error",
      "Unauthorized Access",
      "Resource Not Found",
      "Request Timeout"
    ],
    correctIndex: 2
  },
  {
    question: "Which core component of an operating system manages CPU scheduling, memory, and hardware interaction?",
    options: ["Kernel", "Shell", "Compiler", "Bootloader"],
    correctIndex: 0
  },
  {
    question: "What is the average time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctIndex: 2
  },
  {
    question: "Which SQL clause is used to filter records based on a specified condition?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
    correctIndex: 1
  },
  {
    question: "Which programming paradigm organizes software design around objects containing data and behaviors?",
    options: [
      "Object-Oriented Programming (OOP)",
      "Functional Programming",
      "Procedural Programming",
      "Logic Programming"
    ],
    correctIndex: 0
  },
  {
    question: "In the MVC architectural pattern, what does the 'C' stand for?",
    options: ["Component", "Container", "Controller", "Connector"],
    correctIndex: 2
  },
  {
    question: "Which type of computer memory loses its data when the system is powered off (volatile memory)?",
    options: ["ROM", "Solid State Drive (SSD)", "Hard Disk Drive (HDD)", "RAM"],
    correctIndex: 3
  },
  {
    question: "Which protocol is standard for securely transferring encrypted web pages over the internet?",
    options: ["FTP", "HTTPS", "SMTP", "SSH"],
    correctIndex: 1
  }
];

// App State (Session-only, resets on refresh)
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startContainerEl = document.getElementById("startContainer");
const startBtn = document.getElementById("startBtn");
const questionTrackerEl = document.getElementById("questionTracker");
const scoreTrackerEl = document.getElementById("scoreTracker");
const progressBarEl = document.getElementById("progressBar");
const statusBarEl = document.getElementById("statusBar");
const progressBarContainerEl = document.getElementById("progressBarContainer");
const quizBodyEl = document.getElementById("quizBody");
const questionTextEl = document.getElementById("questionText");
const optionsContainerEl = document.getElementById("optionsContainer");
const resultsContainerEl = document.getElementById("resultsContainer");
const resultsFeedbackEl = document.getElementById("resultsFeedback");
const finalScoreTextEl = document.getElementById("finalScoreText");
const finalPercentageTextEl = document.getElementById("finalPercentageText");
const restartBtn = document.getElementById("restartBtn");

// Prefix labels for options (A, B, C, D)
const optionLetters = ["A", "B", "C", "D"];

/**
 * Show the initial welcome screen
 */
function showStartScreen() {
  startContainerEl.style.display = "block";
  statusBarEl.style.display = "none";
  progressBarContainerEl.style.display = "none";
  quizBodyEl.style.display = "none";
  resultsContainerEl.style.display = "none";
}

/**
 * Start or restart the quiz
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Show quiz components and hide welcome/results
  startContainerEl.style.display = "none";
  resultsContainerEl.style.display = "none";
  statusBarEl.style.display = "flex";
  progressBarContainerEl.style.display = "block";
  quizBodyEl.style.display = "block";

  updateHeader();
  renderQuestion();
}

/**
 * Update header progress indicators and running score
 */
function updateHeader() {
  const total = quizQuestions.length;
  questionTrackerEl.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  scoreTrackerEl.textContent = `Score: ${score}`;
  const progressPercent = (currentQuestionIndex / total) * 100;
  progressBarEl.style.width = `${progressPercent}%`;
}

/**
 * Render the current question and options
 */
function renderQuestion() {
  const current = quizQuestions[currentQuestionIndex];
  updateHeader();

  // Set question text
  questionTextEl.textContent = current.question;

  // Clear previous options
  optionsContainerEl.innerHTML = "";

  // Render each option button
  current.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";

    const prefix = document.createElement("span");
    prefix.className = "option-prefix";
    prefix.textContent = optionLetters[index] || (index + 1);

    const textSpan = document.createElement("span");
    textSpan.className = "option-label";
    textSpan.textContent = optionText;

    button.appendChild(prefix);
    button.appendChild(textSpan);

    button.addEventListener("click", () => handleSelectOption(index));
    optionsContainerEl.appendChild(button);
  });
}

/**
 * Handle user option selection
 * @param {number} selectedIndex
 */
function handleSelectOption(selectedIndex) {
  const current = quizQuestions[currentQuestionIndex];
  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");

  // Disable all option buttons immediately to prevent duplicate selections
  optionButtons.forEach(btn => (btn.disabled = true));

  const isCorrect = selectedIndex === current.correctIndex;

  if (isCorrect) {
    score++;
    scoreTrackerEl.textContent = `Score: ${score}`;
    optionButtons[selectedIndex].classList.add("correct");
  } else {
    optionButtons[selectedIndex].classList.add("incorrect");
    // Also highlight the correct answer so the user gets instant learning feedback
    optionButtons[current.correctIndex].classList.add("correct");
  }

  // Brief 1-second pause before automatically advancing to next question or results
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

/**
 * Display the end-of-quiz results screen
 */
function showResults() {
  const total = quizQuestions.length;
  progressBarEl.style.width = "100%";

  // Hide quiz question area and header counters
  statusBarEl.style.display = "none";
  progressBarContainerEl.style.display = "none";
  quizBodyEl.style.display = "none";

  // Calculate percentage
  const percentage = Math.round((score / total) * 100);

  // Set score text
  finalScoreTextEl.textContent = `${score} / ${total}`;
  finalPercentageTextEl.textContent = `${percentage}%`;

  // Performance feedback message
  let feedbackMessage = "";
  if (score === total) {
    feedbackMessage = "Outstanding! Perfect score!";
  } else if (score >= 8) {
    feedbackMessage = "Excellent work! You have strong computing fundamentals.";
  } else if (score >= 5) {
    feedbackMessage = "Good job! You have a solid foundation.";
  } else {
    feedbackMessage = "Good effort! Keep learning and try again.";
  }
  resultsFeedbackEl.textContent = feedbackMessage;

  // Reveal results container
  resultsContainerEl.style.display = "block";
}

// Event Listeners
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

// Show welcome start screen on page load
document.addEventListener("DOMContentLoaded", showStartScreen);
