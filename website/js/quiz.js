const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var QuestionAccuracy = 0


function myFunction() {
  var x = document.getElementById("Picture1").style.display = "none";
  var x = document.getElementById("Picture2").style.display = "none";
}
myFunction()

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() + 1)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  QuestionAccuracy = 0
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct}
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  myFunction()
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else{
    startButton.innerText = 'Reset'
    startButton.classList.remove('hide')
    
    
  
  if (shuffledQuestions.length > currentQuestionIndex){
    if (QuestionAccuracy > 9){
      var x = document.getElementById("Picture1").style.display = "block";}
      else{
      var x = document.getElementById("Picture2").style.display = "block";
  }
}
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    QuestionAccuracy++;
    console.log(QuestionAccuracy)
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Vraag 1: Geloof je in spoken?',
    answers: [
      { text: 'Ja', correct: true },
      { text: 'Nee', correct: false },
    ]
  },
  {
    question: 'Vraag 2: Heb je ooit iets in je leven gestolen?',
    answers: [
      { text: 'Ja', correct: true },
      { text: 'Nee', correct: false},
    ]
  },
  {
    question: 'Vraag 3: Ik hou ervan om in de spotlight te zitten',
    answers: [
      { text: 'Ja', correct: true },
      { text: 'Nee', correct: false},
    ]
  },
  {
    question: 'Vraag 4: Ik word snel gestressed',
    answers: [
      { text: 'Ja', correct: true },
      { text: 'Nee', correct: true },
    ]
  },
  {
    question: 'Vraag 5: Ik ben erg lui',
    answers: [
      { text: 'Waar', correct: true },
      { text: 'Niet waar', correct: true },
    ]
  },
]

