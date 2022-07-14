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
        question: "3. What does comment means in HTML, CSS and JavaScript?",
        a: "To tell the browser to ignore the code",
        b: "To tell VSCode to style the element",
        c: "To tell the browser to accept the code",
        d: "To tell the browser to use Github",
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
        question: "5. In JavaScript, string represents what?",
        a: "numbers",
        b: "objects and arrays",
        c: "text",
        d: "HTML",
        correct: "c"
    }, {
        question: "6. Which element is used to create paragragh?",
        a: "l element",
        b: "m element",
        c: "o element",
        d: "p element",
        correct: "d"
    }, {
        question: "7. What does Concatenation in JavaScirpt means?",
        a: "To join strings and numbers with + sign",
        a: "To add strings and numbers with - sign",
        a: "To join strings and objects with = sign",
        a: "To delete strings and numbers together",
        correct: "a"
    }, {
        question: "8. Which type of bracket is mainly used in HTML and CSS?",
        a: "<> and ()",
        b: "[] and <>",
        c: "<> and {}",
        d: "() and {}",
        correct: "c"
    }, {
        question: "9. Which element creates images in our website?",
        a: "image element",
        b: "img element",
        c: "i element",
        d: "images element",
        correct: "b"
    }, {
        question: "10. How do you call a function in JavaScript?",
        a: "By adding () after the function name",
        b: "By adding () before the function name",
        c: "By adding {} after the function name",
        d: "By adding [] before the function name",
        correct: "a"
    }, {
        question: "11. Which of these elements does not have closing tag?",
        a: "img element",
        b: "h element",
        c: "p element",
        d: "form element",
        correct: "a"
    }, {
        question: "12. What are the keywords to declare variables in JavaScript?",
        a: "var, let, letter",
        b: "var, let, const",
        c: "vac, tel, function",
        d: "arr, lets, str",
        correct: "b"
    }, {
        question: "13. The form element contains which set of elements?",
        a: "label & input elements",
        b: "ul & ol elements",
        c: "p & h elements",
        d: "label & title elements",
        correct: "a"
    }, {
        question: "14. JavaScript operator x+=y means?",
        a: "x + y = 1",
        b: "x = x + y",
        c: "xy = yx",
        d: "x + y = y",
        correct: "b"
    }, {
        question: "15. The <br> elements is used for what?",
        a: "To go to a new topic",
        b: "To go to a new line",
        c: "To make our form beautiful",
        d: "To make the label & input big",
        correct: "b"
    }, {
        question: "16. Padding is used for ______ while Margin is used for __________?",
        a: "Inside space / Middle space",
        b: "Inside space / Outside space",
        c: "Front space / Back space",
        d: "HTML space / CSS space",
        correct: "b"
    }, {
        question: "17. JavaScript start counting variable's index from?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a"
    }, {
        question: "18. Which CSS property is used to increase the size of text?",
        a: "text-size",
        b: "word-size",
        c: "font-size",
        d: "increase-size",
        correct: "c"
    }, {
        question: "19. JavaScript array uses _______ while JavaScript Object uses ________?",
        a: "[] and {}",
        b: "() and {}",
        c: "[] and ()",
        d: "[] and {]",
        correct: "a"
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
                <!-- <form action="form.php" method="post">
                <label for="name" class="submit_label">Fullname</label>
                <input type="text" id="name" name="name" class="submit_input"> <br><br>
                <label for="score" class="submit_score">Score</label>
                <input type="text" id="score" name="" class="submit_score" value="${score}" name="score" readonly> <br> <br>
                <button>Send score</button>
                </form>  -->

                <button onclick="location.reload()">Restart quiz</button>
                `;
        }
    }
});