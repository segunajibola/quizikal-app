const quizData = [
    {
        question: "1. General understanding with something",
        a: "knorledge",
        b: "knowlegde",
        c: "knowledge",
        d: "knowlege",
        correct: "c"
    }, {
        question: "2. To talk to oneself",
        a: "solliloquize",
        b: "solilloquize",
        c: "sololiquize",
        d: "soliloquize",
        correct: "d"
    }, {
        question: "3. A large, semi-acquatic, herbivorous African Mammal",
        a: "hippopotamus",
        b: "hippoppotamus",
        c: "hipoppotamus",
        d: "hippopotammus",
        correct: "a"
    }, {
        question: "4. Troublesome and badly behaved",
        a: "misschievous",
        b: "mischeivous",
        c: "mischievious",
        d: "mischievous",
        correct: "d"
    }, {
        question: "5. A period of time consisting of one thousand years",
        a: "millannium",
        b: "millennium",
        c: "milennium",
        d: "millenium",
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
                quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});