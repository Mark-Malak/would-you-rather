import React from 'react'
import { Button } from '@material-ui/core'
import Question from './Question';
import Poll from './Poll';
import AnsweredPoll from './AnsweredPoll';
import { connect } from 'react-redux'
import { render } from '@testing-library/react';
import authedUser from '../reducers/authedUser';
class QuestionList extends React.Component {
    render() {
        console.log("this is ittt \n" + this.props.questionIds)
        return (
            <div className="question-list-container">
                <div>
                    <Button className="list-btn" variant="outlined">Unanswered Questions</Button>
                    <Button className="list-btn" variant="outlined">Answered Questions</Button>
                </div>

                <div>
                    <ul>
                        {this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id = {id} questions = {this.props.questions} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ questions }) {
    if(questions){
          const answeredQuesionIds =  Object.values(questions).filter(q => (q.optionOne.votes.includes(authedUser) ||q.optionTwo.votes.includes(authedUser) ))
          console.log("quests i answered are :" + answeredQuesionIds); 
    }
 
    return {
        questionIds: Object.keys(questions) ,
        questions
    }
}


export default connect(mapStateToProps)(QuestionList)
