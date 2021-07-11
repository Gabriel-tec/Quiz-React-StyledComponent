import React,{useContext} from 'react';

import { QuizContext } from '../Helpers/Contexts';
import { Questions_Bank } from '../Helpers/Questions_02';

export default function EndScreen() {

    const {score,setScore,setGameState} = useContext(QuizContext);

    const finishQuiz = () =>{
        setScore(0)
        setGameState("menu")
    }

    return (
        <div>
            <h2>Your Score</h2>
            <h2>{score}/{Questions_Bank.length}</h2>
            <button onClick={finishQuiz}>Restart Quiz</button>
        </div>
    )
}