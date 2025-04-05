// PARTE 1: Função que inicia o jogo
function startGame() {
  const bgMusic = document.getElementById("bg-music");
  bgMusic.volume = 0.5;
  bgMusic.play();
  loadQuestion();
  document.querySelector("button").style.display = "none"; // esconde o botão
}

// PARTE 2: Lista de perguntas e respostas
const questions = [
  {
    question: "Giorno Giovanna is the Jojo for which part of Jojo's Bizarre Adventure?",
    answers: [
      { option: "Diamond is Unbreakable", correct: false },
      { option: "Vento Aureo", correct: true },
      { option: "Jojolion", correct: false },
      { option: "Phantom Blood", correct: false },
    ]
  },
  {
    question: "Whose pet is killed by the enemy in the first part of Jojo's Bizarre Adventure's first episode?",
    answers: [
      { option: "Jonathan Joestar's", correct: true },
      { option: "Jotaro Kujo's", correct: false },
      { option: "Giorno Giovanna's", correct: false },
      { option: "Dio Brando's", correct: false },
    ]
  },
  {
    question: "During Battle Tendency's last fight, what is the tatic utilized by Joseph to win against Kars?",
    answers: [
      { option: "Joseph awakens his Stand", correct: false },
      { option: "Ceasar comes back to help Joseph", correct: false },
      { option: "Joseph re-awekens a volcano", correct: true },
      { option: "Smokey saves the day with a rock", correct: false },
    ]
  },
  {
    question: "When in prison, what is Jolyne's first complain about her situation?",
    answers: [
      { option: "The guards won't let her see her dad", correct: false },
      { option: "She misses her 'toy'", correct: true },
      { option: "The prison soap stinks", correct: false },
      { option: "She can't find her panties", correct: false },
    ]
  },
  {
    question: "In Stardust Crusaders, what is the number of the hotel room Joseph and Avdol are hosted in?",
    answers: [
      { option: "157", correct: false },
      { option: "656", correct: false },
      { option: "305", correct: false },
      { option: "226", correct: true },
    ]
  },
];

// PARTE 3: Pegando os elementos do HTML
const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");
const progressElement = document.querySelector(".progress");
const finalText = document.querySelector(".end span");
const content = document.querySelector(".content");
const finalContent = document.querySelector(".end");

// PARTE 4: Variáveis para controle do jogo
let currentIndex = 0;
let correctAnswers = 0;

// PARTE 5: Função para carregar perguntas
function loadQuestion() {
  progressElement.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const currentQuestion = questions[currentIndex];
  questionElement.innerHTML = currentQuestion.question;
  answersElement.innerHTML = "";

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.innerText = answer.option;
    button.onclick = function () {
      if (answer.correct) {
        correctAnswers++;
      }
      currentIndex++;
      if (currentIndex < questions.length) {
        loadQuestion();
      } else {
        endGame();
      }
    };
    answersElement.appendChild(button);
  }
}

// PARTE 6: Finalizar jogo
function endGame() {
  finalText.innerHTML = `Congrats! You got ${correctAnswers} out of ${questions.length}, now go do something with your life.`;
  content.style.display = "none";
  finalContent.style.display = "flex";
}

// PARTE 7: Botão de mutar/desmutar música
function toggleMusic() {
  const bgMusic = document.getElementById("bg-music");
  bgMusic.muted = !bgMusic.muted;
}


