import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import { useLocation } from 'react-router'
import AnsweredPoll from './AnsweredPoll'
const cardStyle = {
    margin: 'auto ',
    width: '30%'
}

const Poll  = () =>  {

    
        const {answered , user , question} = useLocation().state
        return (
        !answered ? (<div  style = {cardStyle } className="question">
            <div className="header">
                <h3 align="left" >{user.name} asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                 <img src={user.avatarURL} class="myAvatar"></img>
                </div>

                <div className="questionBody-poll">
                    <h4> Would you rather </h4>
                    <div  style = {{ 'text-align' : 'left'    }}  >
                        <input  type="radio" value="Male" name="gender" /> {question.optionOne.text}
                        <br/>
                        <hr/>
                        <input  type="radio" value="Female" name="gender" /> {question.optionTwo.text}
                        <br/>
                        <br/>   
                    </div>
                    <Button className="sign-btn" variant="outlined">Submit</Button>
                </div>
            </div>

        </div>) : <AnsweredPoll user = {user}  question = {question} />
    )
}

export default Poll
