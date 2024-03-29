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
    question: "2. What is the full meaning of CSS?",
    a: "Complementing Style Shirt",
    b: "Cascading Style Sheet",
    c: "Cup Snake Snail",
    d: "Cascading Stress Sheet",
    correct: "b",
  },
  {
    question: "3. What does comment means in HTML, CSS and JavaScript?",
    a: "To tell the browser to ignore the code",
    b: "To tell VSCode to style the element",
    c: "To tell the browser to accept the code",
    d: "To tell the browser to use Github",
    correct: "a",
  },
  {
    question: "4. We have two types of list element",
    a: "Arrange list & Scattered list",
    b: "Number list & Bullet list",
    c: "Form list & Table list",
    d: "Ordered list & Unordered list",
    correct: "d",
  },
  {
    question: "5. In JavaScript, string represents what?",
    a: "numbers",
    b: "objects and arrays",
    c: "text",
    d: "HTML",
    correct: "c",
  },
  {
    question: "6. Which element is used to create paragragh?",
    a: "l element",
    b: "m element",
    c: "o element",
    d: "p element",
    correct: "d",
  },
  {
    question: "7. What does Concatenation in JavaScirpt means?",
    a: "To join strings and numbers with + sign",
    b: "To add strings and numbers with - sign",
    c: "To join strings and objects with = sign",
    d: "To delete strings and numbers together",
    correct: "a",
  },
  {
    question: "8. Which type of bracket is mainly used in HTML and CSS?",
    a: "<> and ()",
    b: "[] and <>",
    c: "<> and {}",
    d: "() and {}",
    correct: "c",
  },
  {
    question: "9. Which element creates images in our website?",
    a: "image element",
    b: "img element",
    c: "i element",
    d: "images element",
    correct: "b",
  },
  {
    question: "10. How do you call a function in JavaScript?",
    a: "By adding () after the function name",
    b: "By adding () before the function name",
    c: "By adding {} after the function name",
    d: "By adding [] before the function name",
    correct: "a",
  },
  {
    question: "11. Which of these elements does not have closing tag?",
    a: "img element",
    b: "h element",
    c: "p element",
    d: "form element",
    correct: "a",
  },
  {
    question: "12. What are the keywords to declare variables in JavaScript?",
    a: "var, let, letter",
    b: "var, let, const",
    c: "vac, tel, function",
    d: "arr, lets, str",
    correct: "b",
  },
  {
    question: "13. The form element contains which set of elements?",
    a: "label & input elements",
    b: "ul & ol elements",
    c: "p & h elements",
    d: "label & title elements",
    correct: "a",
  },
  {
    question: "14. JavaScript operator x+=y means?",
    a: "x + y = 1",
    b: "x = x + y",
    c: "xy = yx",
    d: "x + y = y",
    correct: "b",
  },
  {
    question: "15. The <br> elements is used for what?",
    a: "To go to a new topic",
    b: "To go to a new line",
    c: "To make our form beautiful",
    d: "To make the label & input big",
    correct: "b",
  },
  {
    question:
      "16. Padding is used for ______ while Margin is used for __________?",
    a: "Inside space / Middle space",
    b: "Inside space / Outside space",
    c: "Front space / Back space",
    d: "HTML space / CSS space",
    correct: "b",
  },
  {
    question: "17. JavaScript start counting variable's index from?",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "a",
  },
  {
    question: "18. Which CSS property is used to increase the size of text?",
    a: "text-size",
    b: "word-size",
    c: "font-size",
    d: "increase-size",
    correct: "c",
  },
  {
    question:
      "19. JavaScript array uses _______ while JavaScript Object uses ________?",
    a: "[] and {}",
    b: "() and {}",
    c: "[] and ()",
    d: "[] and {]",
    correct: "a",
  },
  {
    question: "20. How do you hover on a text?",
    a: "By putting CSS on the text",
    b: "By putting your cursor(mouse) on the text",
    c: "By changing the color",
    d: "By using JavaScript",
    correct: "b",
  },
  {
    question: "21. What is Git?",
    a: "A version control system",
    b: "A JavaScript framework",
    c: "VSCode alternative",
    d: "HTML tag",
    correct: "a",
  },
  {
    question: "22. What is the most popular JavaScript framework?",
    a: "HTML",
    b: "TailwindCSS",
    c: "React",
    d: "WordPress",
    correct: "c",
  },
  {
    question:
      "23. How do you create a React app with Next.js from the terminal?",
    a: "npx create-next-app@latest",
    b: "nnn create next",
    c: "create next app",
    d: "npx react",
    correct: "a",
  },
  {
    question: "24. What is Github?",
    a: "A platform for hosting code that allows for version control and collaboration.",
    b: "A platform for writing code",
    c: "A website for learning how to sing",
    d: "React framework",
    correct: "a",
  },
  {
    question: "25. What is Next.js?",
    a: "Web Template",
    b: "Vue website",
    c: "React framework",
    d: "HTML framework",
    correct: "c",
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
    if (answerEl.checked) {
      answer = answerEl.id;
      answerText = document.querySelector(`label[for="${answer}"]`).textContent;
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
  html2canvas(document.getElementById("quizResult")).then(function (canvas) {
    var link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "myQuizResult.png";
    link.click();
  });
}
const result = [];


submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    result.push({
      question: quizData[currentQuiz].question,
      pickedOption: answerText,
      correctOption: getCorrectText(quizData[currentQuiz].correct),
    });
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz_header_text.innerHTML = "";
      const missedAnswers = result.filter(
        (result) => result.pickedOption !== result.correctOption
      );

      quiz.innerHTML = `
                <div id="quizResult">
                    <h2>Result</h2>
                    <h2>You answered ${score} correctly out of ${
        quizData.length
      } questions.</h2>
                    <div class="emoji">
                    ${
                      score <= 10
                        ? "😭"
                        : score <= 12
                        ? "😒"
                        : score <= 15
                        ? "😉"
                        : score <= 23
                        ? "😜"
                        : score <= 25
                        ? "😆🙌"
                        : ""
                    }</div>
                    <h3>Time completed:</h3>
                    <h3>${new Date().toLocaleString()}</h3>
                    ${
                      missedAnswers.length > 0
                        ? `
                    <h3 class="missedHeading">The ones you missed</h3> 
                    <div>
                        <table class="missedTable">
                            <tr>
                                <th>Question</th>
                                <th>Picked Option</th>
                                <th>Correct Option</th>
                            </tr>
                        ${missedAnswers
                          .map(
                            (missed) => `
                        <tr>
                            <td>${missed.question}</td>
                            <td>${missed.pickedOption}</td>
                            <td>${missed.correctOption}</td>
                        </tr>`
                          )
                          .join("")}
                        </table>`
                        : `<h3>
                        You got everything.
                        </h3>`
                    }
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
