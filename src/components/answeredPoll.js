import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import ResultBar from  './ResultBar.js' 
const AnsweredPoll = () => {
    return (
        <div className="question">
            <div className="header">
                <h3 align="left" >Potato asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                    <Avatar style={{ height: '110px' , width: '110px' }}  >P</Avatar>
                </div>

                <div  className="questionBody-poll">
                    <h2> Results: </h2>
                    <div>
                          <p>Would you rather Option1 ? </p>
                          <progress id="file" max="100" value="70"> 70% </progress>
                          <label for="file"> 70% </label>
                          <p> 2 out of 3 votes </p>
                    </div>
                  
                    <div>
                          <p>Would you rather Option1 ? </p>
                          <progress id="file" max="100" value="30"> 70% </progress>
                          <label for="file"> 30% </label>
                          <p> 2 out of 3 votes </p>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default AnsweredPoll
