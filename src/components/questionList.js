import React from 'react'
import { Button } from '@material-ui/core'
const questionList = () => {
    return (
        <div className = "question-list-container">
        <div>
             <Button className = "list-btn" variant = "outlined">Unanswered Questions</Button>
            <Button className = "list-btn" variant = "outlined">Answered Questions</Button>
        </div>
           
            <div>
                <ul>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                    <li>question </li>
                </ul>
            </div>
        </div>
    )
}

export default questionList
