import React from 'react'
import { Button } from '@material-ui/core'
import Question from './Question';
import Poll from './Poll';
import AnsweredPoll from './AnsweredPoll';
import { connect } from 'react-redux'
import { render } from '@testing-library/react';
import authedUser from '../reducers/authedUser';
class QuestionList extends React.Component {
    state = { 
        answered : false 
    }
    answered(){
        this.setState( () =>  ({answered:true})  );
        console.log(this.state.answered)
    }

    unAnswered(){
        this.setState( () =>  ({answered:false})  );
        console.log(this.state.answered)
    }
    render() {
        console.log("this is ittt \n" + this.props.questionIds)
        return (
            <div className="question-list-container">
                <div>
                    <Button onClick = {this.unAnswered.bind(this)} className="list-btn" variant="outlined">Unanswered Questions</Button>
                    <Button onClick = {this.answered.bind(this)} className="list-btn" variant="outlined">Answered Questions</Button>
                </div>

                <div>
                    <ul>
                        { !this.state.answered ? this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id={id} questions={this.props.questions} />
                            </li>
                        )) 
                        : this.props.answeredQuesionIds.map((id) => (
                            <li key={id}>
                              <Question id={id} questions={this.props.questions} />
                            </li>) )}
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ questions, authedUser }) {

    const answeredQuesionIds = Object.values(questions).filter(q => (q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)))
    return {
        questionIds: Object.keys(questions),
        questions,
        answeredQuesionIds: answeredQuesionIds.map( q => q.id)
    }
}


export default connect(mapStateToProps)(QuestionList)
