import React, {useState} from 'react' 
import './App.css'

function App() {

  const questions = [
    {
      questionText: "Who's SpaceX Founder ?",
      answerOptions: [
        {answerText: 'Elon Musk', isCorrect: true},
        {answerText: 'Gabe Newell', isCorrect: false},
        {answerText: 'Bill Gates', isCorrect: false},
        {answerText: 'Jeff Bezos', isCorrect: false}
      ]
    },
    {
      questionText: 'What is Bitcoin ?',
      answerOptions: [
        {answerText: 'Money', isCorrect: false},
        {answerText: 'Cryptocurrency', isCorrect: true},
        {answerText: 'Coins', isCorrect: false},
        {answerText: 'Virtual Currency', isCorrect: false}
      ]
    },
    {
      questionText: "What's the most popular programming language at start of 2022 ?",
      answerOptions: [
        {answerText: 'JavaScript', isCorrect: false},
        {answerText: 'C', isCorrect: false},
        {answerText: 'Python', isCorrect: true},
        {answerText: 'GO', isCorrect: false}
      ]
    },
    {
      questionText: "What's the fastest car on earth in 2022 ?",
      answerOptions: [
        {answerText: 'Hennessey Venom F5', isCorrect: false},
        {answerText: 'Koenigsegg Jesko Absolut', isCorrect: true},
        {answerText: 'Bugatti Chiron Super Sport', isCorrect: false},
        {answerText: 'McLaren Speedtail', isCorrect: false}
      ]
    },
    {
      questionText: "What's the nearest galaxy to our Solar system",
      answerOptions: [
        {answerText: 'Pegasus III', isCorrect: false},
        {answerText: 'Andromeda', isCorrect: false},
        {answerText: 'Draco II', isCorrect: false},
        {answerText: 'Canis Major Dwarf', isCorrect: true}
      ]
    }
  ]


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const AnswerLogicOnClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }



  



  return (
    <div className="app">


      


      {showScore
        ? <div className="section_score">
           <div>Correct Answers {score} out of {questions.length}</div>
           <button 
            className='refresh_button'
            onClick={refresh}  
          >Try again!</button>
          </div>
        : <div className='quizz'>

        <div className='question_section'>
         <div className='question_count'>
           <span>Question {currentQuestion + 1} </span> / {questions.length} 

         </div>
         <div className='question_text'>{questions[currentQuestion].questionText} </div>
        </div>
        <div className="answer_section">
          {questions[currentQuestion].answerOptions.map(item => (
          <button
          onClick={() => AnswerLogicOnClick(item.isCorrect)}
          >{item.answerText}</button>
          )
          )}


        </div>
      </div>
      }




      
      
    </div>
        
  )
}

export default App;
