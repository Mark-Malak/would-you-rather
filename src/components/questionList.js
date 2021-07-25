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
        answered : false ,
        btnOneColor : 'rgb(225 , 225 , 225 )' , 
        btnTwoColor : 'white' , 
    }
    answered(e){
        
        this.setState( () =>  ({
            answered:true , 
            btnOneColor : 'white' , 
            btnTwoColor : 'rgb(225 , 225 , 225 )'
        })  );
        console.log(this.state.answered)
    }

    unAnswered(e){
        this.setState( () =>  ({
            answered:false ,
            btnOneColor : 'rgb(225 , 225 , 225 )' , 
            btnTwoColor : 'white' ,
        })  );
        console.log(this.state.answered)
    }
    render() {
        console.log("this is ittt \n" + this.props.questionIds)
        return (
            <div className="question-list-container">
                <div>
                    <Button style={{ backgroundColor : this.state.btnOneColor }} onClick = {this.unAnswered.bind(this)} className="list-btn" variant="contained">Unanswered Questions</Button>
                    <Button style={{ backgroundColor : this.state.btnTwoColor}} onClick = {this.answered.bind(this)} className="list-btn" variant="contained">Answered Questions</Button>
                </div>

                <div>
                    <ul>
                        { !this.state.answered ? this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id={id} questions={this.props.questions}  answered = { this.state.answered } />
                            </li>
                        )) 
                        : this.props.answeredQuesionIds.map((id) => (
                            <li key={id}>
                              <Question id={id} questions={this.props.questions} answered = { this.state.answered } />
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
