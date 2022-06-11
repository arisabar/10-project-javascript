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
    correct: "b",
  },
];

const questionEl = document.getElementById("question");
const showQuiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  //   currentQuestion++;
}

function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //* check to see the answer
  const answer = getSelected();

  // console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // showQuiz.innerHTML = `You finished! your score at ${score}/${quizData.length}`;
      confirm(`You finished! your score at ${score}/${quizData.length}`);
      window.location.reload();
    }
  }
});
