import React from 'react';
import {Link} from 'react-router-dom';

import {InitialPageStyle} from "../Styles/Styles"

function InitialPage() {
    return (
        <div>

            <InitialPageStyle>
                <h1>Super Quiz</h1>
                <Link to="/Selection">
                    <button>Choice a quiz</button>
                </Link>
            </InitialPageStyle>
          
        </div>
    )
}

export default InitialPage
