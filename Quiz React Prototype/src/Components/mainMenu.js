import React,{useContext} from 'react';

import { QuizContext } from '../Helpers/Contexts';

export default function MainMenu() {

    const {setGameState} = useContext(QuizContext)

    return (
        <div>
            <h2>Math Quiz</h2>
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}
