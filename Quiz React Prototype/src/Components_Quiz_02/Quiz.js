import React,{useState,useContext} from 'react';

import {Questions_Bank} from '../Helpers/Questions_02';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {

    const {setGameState, score, setScore} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);    
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuiz = () =>{
        if(Questions_Bank[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
    }
    const finishQuiz = () =>{
        if(Questions_Bank[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState("endScreen")
    }

    return (
        <div>

            <p>{Questions_Bank[currQuestion].prompt}</p>
            {""}
            <div>
                <button onClick={() => setOptionChosen("A")}>{Questions_Bank[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions_Bank[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions_Bank[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions_Bank[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions_Bank.length -1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ): (
                <button onClick={nextQuiz}>Next Quiz</button>
            )}
            

            
        </div>
    )
}
