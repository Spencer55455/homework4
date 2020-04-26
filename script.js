const startButton = document.getElementById("start-btn")
const questionElement = document.getElementById("question")
const answerButtonsElelment = docuent.getElementById("answer-buttons")

startButton.addEventListener("click", startGame)

function startGame() {
console.log("started")
showQuestion(question){
    questionElement.innerText = question.question
}

function selectAnswer() {


}




const questions = [

{

    question: "what is the first letter of the alphabet",
    answers: [
        {text: "a", correct: true },
        {text: "b", correct: false},
        {text: "c", correct: false},
        {text: "d", correct: false},
    ]
},

  {
    question: "what is the capital of california",
    answers: [
      { text: "sacramento", correct: true },
      { text: "san francisco", correct: false },
      { text: "berkely", correct: false },
      { text: "La", correct: false }
    ]
  },

  {
    question: "What is 1 + 1?",
    answers: [
      { text: "2", correct: true },
      { text: "3", correct: false }
      { text: "4", correct: false }
      { text: "5", correct: false }
    ]
  }
]