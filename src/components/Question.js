import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Question extends React.Component {
    
    render() {
        const { question, user  } = this.props;
        console.log("user name is " + user.name);
        const {  optionOne } = question;
        return (
            <div className="question">
                <div className="header">
                    <h3 align="left" >{user.name} asks : </h3>
                </div>
                <div className="questionBody">
                    <div className="avatar">
                        <img src={user.avatarURL} class="myAvatar"></img>
                    </div>

                    <div className="questionBody-poll">
                        <h4> Would you rather </h4>
                        <p>{`..${optionOne.text}..`}</p>
                        <Link to={{
                            pathname: `/questions/${question.id}` ,
                        }}>
                            <Button className="sign-btn" variant="outlined">view poll</Button>
                        </Link>
                        <br/>
                        
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        user: users[question.author],
        question: question
            ? question
            : null

    }
}
export default connect(mapStateToProps)(Question)
