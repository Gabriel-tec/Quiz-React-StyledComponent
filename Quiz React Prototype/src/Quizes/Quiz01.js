import React,{useState} from 'react';

import MainMenu from '../Components/mainMenu';
import Quiz from '../Components/Quiz';
import EndScreen from '../Components/endScreen';

import {Link} from 'react-router-dom';

import {QuizStyle} from '../Styles/Styles'

import {QuizContext} from '../Helpers/Contexts';

export default function Quiz01() {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);

    return (
        <div>
            <QuizStyle>

            
                <Link to="/Selection">
                    <button>Return to Selection</button>
                </Link>
                {""}

                <QuizContext.Provider value={{setGameState , score , setScore}}>
                    {gameState === 'menu' && <MainMenu/>}
                    {gameState === 'quiz' && <Quiz/>}
                    {gameState === 'endScreen' && <EndScreen/>}
                </QuizContext.Provider>
            
            </QuizStyle>
            
        </div>
    )
}
