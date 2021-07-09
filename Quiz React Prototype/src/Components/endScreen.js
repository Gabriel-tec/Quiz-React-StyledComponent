import React,{useContext} from 'react';

import {Questions} from '../Helpers/QuestionsBank';
import { QuizContext } from '../Helpers/Contexts';

export default function EndScreen() {

    const {score,setScore,setGameState} = useContext(QuizContext);

    const finishQuiz = () =>{
        setScore(0)
        setGameState("menu")
    }

    return (
        <div>
            <h2>Your Score</h2>
            <h2>{score}/{Questions.length}</h2>
            <button onClick={finishQuiz}>Restart Quiz</button>
        </div>
    )
}