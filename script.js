// import { quizData } from "./quizData.js";

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz_header_text = document.getElementById("quiz_header_text");
// const quizResult = document.getElementById("quizResult");

const quizData = [
  {
    question: "1. What is the full meaning of HTML?",
    a: "Hyper Text Markup Language",
    b: "Hyper Type Markup Language",
    c: "Hyper Type Map Language",
    d: "Height Type Madeup Language",
    correct: "a",
  },
  {
    question: "2. We have two types of list element",
    a: "Arrange list & Scattered list",
    b: "Number list & Bullet list",
    c: "Form list & Table list",
    d: "Ordered list & Unordered list",
    correct: "d",
  },
];

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEL.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getCorrectText(option) {
  switch (option) {
    case "a":
      return a_text.innerText;
      break;
    case "b":
      return b_text.innerText;
      break;
    case "c":
      return c_text.innerText;
      break;
    case "d":
      return d_text.innerText;
  }
}

let answerText;

function getSelected() {
  let answer = undefined;

  // loop all answer element and name each answerEl

  answersEls.forEach((answerEl) => {
    // if one of them is checked or clicked
    if (answerEl.checked) {
      // answer goes from underfined to its id in the html
      answer = answerEl.id;
      answerText = document.querySelector(`label[for="${answer}"]`).textContent;
      console.log(answerText);
    }
  });
  // answer is the id here and now equals to the function
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function saveAsPNG() {
  console.log("save");
  html2canvas(document.getElementById("quizResult")).then(function (canvas) {
    var link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "myQuizResult.png";
    link.click();
  });
}
const result = [];

// function storeResult() {}

submitBtn.addEventListener("click", () => {
  // storeResult()
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    result.push({
      question: quizData[currentQuiz].question,
      pickedOption: answerText,
      correctOption: getCorrectText(quizData[currentQuiz].correct),
    });
    console.log(result);
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz_header_text.innerHTML = "";

      quiz.innerHTML = `
                <div id="quizResult">
                    <h2>Result</h2>
                    <h2>You answered ${score} correctly out of ${
        quizData.length
      } questions.</h2>
                    <div class="emoji">${
                      score <= 1
                        ? "😭"
                        : score <= 2
                        ? "😒"
                        : score <= 3
                        ? "😉"
                        : score <= 4
                        ? "😜"
                        : score <= 5
                        ? "😆🙌"
                        : ""
                    }</div>
                    <h3>Time completed:</h3>
                    <h3>${new Date().toLocaleString()}</h3>
                    <h3 class="missedHeading">The ones you missed</h3> 
                    <div>

            ${result
              .filter((result) => result.pickedOption !== result.correctOption)
              .map(
                (missed) => `
              <table class="missedTable">
                <tr>
                    <th>Question</th>
                    <th>Picked Option</th>
                    <th>Correct Option</th>
                </tr>
                <tr>
                    <td>${missed.question}</td>
                    <td>${missed.pickedOption}</td>
                    <td>${missed.correctOption}</td>
                </tr>
              </table>
          `
              )
              .join("")}
             
        </div>
                </div>

                <!-- <form action="form.php" method="post">
                <label for="name" class="submit_label">Fullname</label>
                <input type="text" id="name" name="name" class="submit_input"> <br><br>
                <label for="score" class="submit_score">Score</label>
                <input type="text" id="score" name="" class="submit_score" value="${score}" name="score" readonly> <br> <br>
                <button>Send score</button>
                </form>  -->
                <button onclick="location.reload()">Restart quiz</button>
                <button onclick="saveAsPNG()">Download result as image</button>
                `;
    }
  }
});
