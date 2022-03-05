const beginButton = document.getElementById('begin-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-cont')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('option-buttons')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progressBarFull')


let randomizedQuestions, currentQuestionIndex
let score = 0

beginButton.addEventListener('click', beginGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function beginGame() {
beginButton.classList.add('hide')
score = 0
randomizedQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainer.classList.remove('hide')
displayNextQuestion()
}

function displayNextQuestion() {
    resetState()
    displayQuestion(randomizedQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', pickAnswer)
    answerButtonElement.appendChild(button)
});
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function pickAnswer(e) {
const pickedButton = e.target
const correct = pickedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (randomizedQuestions > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    beginButton.innerText = 'Play Again?'
    beginButton.classList.remove ('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

}

const questions = [
    {
    question: 'Where do we host our repositories?',
    answers: [
        {text: 'gitHub', correct: true},
        {text: 'iCloud', correct: false},
        {text: 'under your matress', correct: false},
        {text: 'in the repo-bank', correct: false} 
    ],
    question: 'What is the correct command to create a new folder in the command line?',
    answers: [
        {text: 'nwfldr', correct: false},
        {text: 'mkdir', correct: true},
        {text: 'new folder', correct: false}, 
        {text: 'abra-ca-folder', correct: false}
    ],
    question: 'What is the bootstrap version of javaScript?',
    answers: [
        {text: 'javaStrap', correct: false},
        {text: 'Beltbuckle', correct: false},
        {text: 'javaMagick', correct: false}, 
        {text: 'jQueries', correct: true}
    ],
    question: 'What is symbol (#) associated with when it comes to coding?',
    answers: [
        {text: 'twitter trending topic', correct: false},
        {text: 'class', correct: false},
        {text: 'id', correct: true},
        {text: 'number', correct: false} 
    ],
    question: 'Who is NOT a TA in our class?',
    answers: [
        {text: 'Peter', correct: false},
        {text: 'Musk', correct: true},
        {text: 'Katherine', correct: false},
        {text: 'Garret', correct: false} 
    ]

    }
]
