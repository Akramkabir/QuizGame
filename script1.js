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
