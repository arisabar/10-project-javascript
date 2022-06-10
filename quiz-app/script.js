const quizData = [
  {
    question: "How old is Sabar",
    a: "10",
    b: "17",
    c: "23",
    d: "60",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    corret: "d",
  },
  {
    question: "Who is the President of Indonesian",
    a: "Puan Maharani",
    b: "Jokowi Dodo",
    c: "Luhut",
    d: "Rocky gerung",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopter Terminals Motorcycle Lamborginis",
    correct: "a",
  },
  {
    question: "What year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  //   currentQuestion++;
}

function getSelected() {}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished! Get yourself an Orange Lemonande");
  }
  //   loadQuiz();
});
