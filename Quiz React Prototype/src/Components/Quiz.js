import React,{useState,useContext} from 'react';

import {Questions} from '../Helpers/QuestionsBank';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {

    const {setGameState, score, setScore} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);    
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuiz = () =>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
    }
    const finishQuiz = () =>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState("endScreen")
    }

    return (
        <div>

            <p>{Questions[currQuestion].prompt}</p>
            {""}
            <div>
                <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length -1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ): (
                <button onClick={nextQuiz}>Next Quiz</button>
            )}
            

            
        </div>
    )
}
