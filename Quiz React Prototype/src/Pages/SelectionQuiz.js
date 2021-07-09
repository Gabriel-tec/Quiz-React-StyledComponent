import React from 'react';

import {SelectionQuizStyle} from '../Styles/Styles'
import {Link} from 'react-router-dom';

function SelectionQuiz() {
    return (
        <div>
            <SelectionQuizStyle>
                <Link to="/">
                    <button>Back to menu</button>
                </Link>
                
                {""}
                <h1>Begginer</h1>

                <Link to="/Quiz01">
                    <button>Quiz 01</button>
                </Link>
                
                <button>Quiz 02</button>
            </SelectionQuizStyle>
            
        </div>
    )
}

export default SelectionQuiz
