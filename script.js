const quizData = [
    {
        question: "How old is Florin Pop?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    }, {
        question: "What is the most-used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "What does HTML stands for?",
        a: "Hypertext Mark Language",
        b: "Cascading Style Sheet",
        c: "JSON Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    }, {
        question: "What year was JavaScript launched?",
        a: "1994",
        b: "1993",
        c: "2018",
        d: "1995",
        correct: "d"
    }, {
        question: "Who is the President of US?",
        a: "Micheal Jackson",
        b: "Anthony Joshua",
        c: "Mike Tyson",
        d: "Joe Bidem",
        correct: "d"
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