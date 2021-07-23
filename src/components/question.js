import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import { formatQuestion } from '../utils/_DATA'
import { connect } from 'react-redux'
class Question extends React.Component {
    render() {
        const { question , user } = this.props;
        console.log("user name is " + user.name) ; 
        const { author , optionOne } = question ; 
        return (
            <div className="question">
                <div className="header">
                    <h3 align="left" >{user.name} asks : </h3>
                </div>
                <div className="questionBody">
                    <div className="avatar">
                        <img src= {user.avatarURL}  class="myAvatar"></img>
                    </div>

                    <div className="questionBody-poll">
                        <h4> Would you rather </h4>
                        <p>{`..${optionOne.text}..`}</p>
                        <Button className="sign-btn" variant="outlined">view poll</Button>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps ({authedUser, users , questions}, { id }) {
    const question = questions[id]
  
    return {
      authedUser,
      user : users[question.author] ,
      question: question
        ? question
        : null  
        
    }
  }
export default connect(mapStateToProps)(Question)
