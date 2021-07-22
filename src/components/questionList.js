import React from 'react'
import { Button } from '@material-ui/core'
import Question from './Question';
const questionList = () => {
    return (
        <div className = "question-list-container">
        <div>
             <Button className = "list-btn" variant = "outlined">Unanswered Questions</Button>
            <Button className = "list-btn" variant = "outlined">Answered Questions</Button>
        </div>
           
            <div>
                <ul>
                <li>
                   <Question />
                </li>
                <li>
                   <Question />
                </li>
                <li>
                   <Question />
                </li>
                <li>
                   <Question />
                </li>
                </ul>
            </div>
        </div>
    )
}

export default questionList
