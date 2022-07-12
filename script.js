const quizData = [
    {
        question: "1. What is the full meaning of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Type Markup Language",
        c: "Hyper Type Map Language",
        d: "Height Type Madeup Language",
        correct: "a"
    }, {
        question: "2. What is the full meaning of CSS?",
        a: "Complementing Style Shirt",
        b: "Cascading Style Sheet",
        c: "Cup Snake Snail",
        d: "Cascading Stress Sheet",
        correct: "b"
    }
    , {
        question: "3. Which element is used to display the title of a webpage?",
        a: "Title Element",
        b: "Theme Element",
        c: "Topbar Element",
        d: "Text Element",
        correct: "a"
    }
    , {
        question: "4. We have two types of list element",
        a: "Arrange list & Scattered list",
        b: "Number list & Bullet list",
        c: "Form list & Table list",
        d: "Ordered list & Unordered list",
        correct: "d"
    }, {
        question: "5. We have these set of heading element",
        a: "h1 - h8",
        b: "h2 - h6",
        c: "h1 - h10",
        d: "h1 - h6",
        correct: "d"
    }, {
        question: "6. Which element is used to create paragragh?",
        a: "l element",
        b: "m element",
        c: "o element",
        d: "p element",
        correct: "d"
    }, {
        question: "7. Which type of bracket is used in HTML?",
        a: "<>",
        b: "[]",
        c: "{}",
        d: "()",
        correct: "a"
    }, {
        question: "8. Which type of bracket is used in CSS?",
        a: "<>",
        b: "[]",
        c: "{}",
        d: "()",
        correct: "c"
    }, {
        question: "9. Which element creates images in our website?",
        a: "image element",
        b: "img element",
        c: "i element",
        d: "images element",
        correct: "b"
    }, {
        question: "10. HTML attributes are found in the opening tag",
        a: "True",
        b: "False",
        c: "Not sure",
        d: "It depends",
        correct: "a"
    }, {
        question: "11. Which of these elements does not have closing tag?",
        a: "img element",
        b: "h  element",
        c: "p element",
        d: "form element",
        correct: "a"
    }, {
        question: "12. The table element contains which set of elements?",
        a: "tr, td, tf",
        b: "tg, tt, ty",
        c: "tr, th, td",
        d: "tw, tm, tp",
        correct: "c"
    }, {
        question: "13. The form element contains which set of elements?",
        a: "label & input elements",
        b: "ul & ol elements",
        c: "p & h elements",
        d: "label & title elements",
        correct: "a"
    }, {
        question: "14. We use HTML, CSS & JavaScript for?",
        a: "Structure, Style & Editing",
        b: "Street, Style & Functionality",
        c: "Structure, Style & Functionality",
        d: "Style, Struce & Graphics",
        correct: "c"
    }, {
        question: "15. The <br> elements is used for what?",
        a: "To go to a new topic",
        b: "To go to a new line",
        c: "To make our form beautiful",
        d: "To make the label & input big",
        correct: "b"
    }, {
        question: "16. Padding is used for?",
        a: "Inside space",
        b: "Outside space",
        c: "Middle space",
        d: "HTML space",
        correct: "a"
    }, {
        question: "17. Margin is used for?",
        a: "Inside space",
        b: "Outside space",
        c: "Middle space",
        d: "HTML space",
        correct: "b"
    }, {
        question: "18. Which CSS property is used to increase the size of text?",
        a: "text-size",
        b: "word-size",
        c: "font-size",
        d: "increase-size",
        correct: "c"
    }, {
        question: "19. Which element is used to create the navigation bar on top of every page?",
        a: "nal element",
        b: "nav element",
        c: "power element",
        d: "form element",
        correct: "b"
    }, {
        question: "20. How do you hover on a text?",
        a: "By putting CSS on the text",
        b: "By putting your cursor(mouse) on the text",
        c: "By changing the color",
        d: "By using JavaScript",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function getSelected() {
    let answer = undefined;

    // loop all answer element and name each answerEl
    
    answersEls.forEach((answerEl) => {
        // if one of them is checked or clicked
        if(answerEl.checked) {
        // answer goes from underfined to its id in the html
            answer = answerEl.id;
        }
    });
    // answer is the id here and now equals to the function
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
      answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
                loadQuiz();
        } else {
                quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
                <form action="form.php" method="post">
                    <label for="name" class="submit_label">Fullname</label>
                    <input type="text" id="name" name="name" class="submit_input"> <br><br>
                    <label for="score" class="submit_score">Score</label>
                    <input type="text" id="score" class="submit_score" name="score"> <br> <br>
                    <label>
                        <input type="checkbox" name="terms">
                        I haven't cheated in any way.
                    </label>
                    <button>Send score</button>
                </form>

                <button onclick="location.reload()">Restart quiz</button>
                `;
        }
    }
});