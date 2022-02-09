
import React from "react"
import blobA from "./images/blobA.png"
import blobB from "./images/blobB.png"
import Question from "./components/Question.js"
import { nanoid } from "nanoid"

export default function App() {

    const [start, setStart] = React.useState(false)
    const [quiz, setQuiz] = React.useState(false)
    const [checker, setChecker] = React.useState(false)
    const [number, setNumber] = React.useState(0)
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    const [quizArray, setQuizArray] = React.useState([])

    function select(event,parentId) {
        const {id} = event.target
        return setQuizArray(prevArray =>(prevArray.map(item => ({
            ...item,
            all_answers: item.id === parentId ? item.all_answers.map(prevAnswer => {
                return prevAnswer.id === id ?
                    {...prevAnswer,
                    selected: !prevAnswer.selected} :
                    {...prevAnswer, 
                    selected: false}                       
            }):
            item.all_answers
        }))))
    } 

    function correctNumber() {
        let num = 0
        quizArray.map(item=> {
            item.all_answers.map(choice=> {
             if(choice.selected === true
                 && choice.answer === item.correct_answer){
                     num++
                 }
            })
             
         })
         return num
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    function checkAnswer() {
        if(!checker){
            setChecker(true)
            setCorrectAnswers(correctNumber())
        }else{
            // change number to fetch new data
            setNumber(prev => prev+1)
            setChecker(false)
            setCorrectAnswers(0)
        }
    }
    
    const startQuiz = () => {
        setStart(prev => !prev)
        setTimeout(() => { 
            setQuiz(prev => !prev) 
            
        }, 1000)
    }
    React.useEffect(() => { 

        fetch('https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple')
            .then(results => results.json())
            // modifying the data to include all answers in one key "all_answers"
            // and give each answer a "selected: false" property.
            // only answers and questions remain in the new data.
            .then(data => setQuizArray(data.results.map(item => {
                let arr = [...item.incorrect_answers,item.correct_answer]
                let randomArr = shuffle(arr)
                return {
                    id: nanoid(),
                    correct_answer: item.correct_answer,
                    question: item.question,
                    all_answers: randomArr.map(choice => ({id: nanoid(), answer: choice, selected: false}))
                }
            })))
    },[number])

    const questions = quizArray.map(item => {

        return (
            <Question 
            key={item.id}
            id={item.id}
            select={select}
            checker={checker}
            answers={item.all_answers}
            correct_answer={item.correct_answer}
            question={item.question}
            />
        )
    })

    return (
        <main className="main">
            <img className={`blobB ${start && "move-blobB"}`} src={blobB} alt="blob"/>
            {!quiz && <div className={`start ${start && "disappear"}`}>
                <h1>Quizzical</h1>
                <h4>Play and test your trivia skills</h4>
                <button
                    className={`blue-button ${start && "disappear"}`}
                    onClick={startQuiz}><h3>Start Quiz</h3></button>
            </div>}
            {quiz && <div className="quiz-container">
                <div>{questions}</div>
                <div className="button-score">
                {checker &&<h5>You scored {correctAnswers}/4 correct answers</h5>}
                <button className="blue-button check-answers" onClick={checkAnswer}>
                {checker? "Play again" : "Check answers"}</button>
                </div>
            </div>}
             
            <img className={`blobA ${start && "move-blobA"}`} src={blobA} alt="blob"/>
        </main>
    )
}