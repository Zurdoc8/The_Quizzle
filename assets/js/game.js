const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressFull = document.querySelector('#progressFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
{
        question: 'Where do we host our repositories?',
    
        choice1: 'gitHub',
        choice2: 'iCloud',
        choice3: 'under your matress',
        choice4: 'in the repo-bank',
        answer: 1,
},
{      question: 'What is the correct command to create a new folder in the command line?',
    
        choice1: 'nwfldr',
        choice2: 'mkdir',
        choice3: 'new folder', 
        choice4: 'abra-ca-folder',
        answer: 2, 
},
{
    question: 'What is the bootstrap version of javaScript?',

        choice1: 'javaStrap',
        choice2: 'Beltbuckle',
        choice3: 'javaMagick', 
        choice4: 'jQueries',
        answer: 4,
},
{
    question: 'What is symbol (#) associated with when it comes to coding?',

        choice1: 'twitter trending topic',
        choice2: 'class',
        choice3: 'id',
        choice4: 'number',
        answer: 3,
},
{
    question: 'Who is NOT a TA in our class?',

        choice1: 'Peter',
        choice2: 'Musk',
        choice3: 'Katherine',
        choice4: 'Garret',
        answer: 2,  
}

];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('The_Quizzle/end.html')
    }

    questionCounter++
    progressText.innerText = `question ${questionCounter} of ${MAX_QUESTIONS}`
    progressFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectAnswer = selectedChoice.dataset['number']

        let classToApply = selectAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
    
        }, 2000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()