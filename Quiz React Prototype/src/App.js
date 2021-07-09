
import React from 'react';
import InitialPage from './Pages/InitialPage';
import SelectionQuiz from './Pages/SelectionQuiz';

import Quiz01 from "./Quizes/Quiz01"

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
                </Switch>
            </BrowserRouter>
        </div>
    )
  }

