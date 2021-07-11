
import React from 'react';
import InitialPage from './Pages/InitialPage';
import SelectionQuiz from './Pages/SelectionQuiz';

import Quiz01 from "./Quizes/Quiz01";
import Quiz02 from './Quizes/Quiz02';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default function App() {

    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <InitialPage/>
                    </Route>
                    <Route path="/Selection">
                        <SelectionQuiz/>
                    </Route>
                    <Route path="/Quiz01">
                        <Quiz01/>
                    </Route>
                    <Route path="/Quiz02">
                        <Quiz02/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
  }

