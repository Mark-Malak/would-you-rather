import React from 'react'
import { Button } from '@material-ui/core'
import Question from './Question';
import Poll from './Poll';
import AnsweredPoll from './AnsweredPoll';
import LeaderBoardItem from './LeaderBoardItem';
const LeaderBoard = () => {
    return (
        <div style = {{backgroundColor : 'transparent'}} className = "question-list-container">
           
            <div>
                <ul>
                <li>
                <LeaderBoardItem />
                </li>
                <li>
                <LeaderBoardItem />
                </li>
                <li>
                <LeaderBoardItem />
                </li>
                <li>
                <LeaderBoardItem />
                </li>
                </ul>
            </div>
        </div>
    )
}

export default LeaderBoard
