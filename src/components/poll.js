import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core'
import { useLocation } from 'react-router'
import AnsweredPoll from './AnsweredPoll'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions';
import { render } from '@testing-library/react';
import { handleInitialData } from '../actions/shared';
const cardStyle = {
    margin: 'auto ',
    width: '30%'
}




class Poll extends React.Component {
    state = {
        chosed1: false,
        chosed2: false,
        chosen: '',
        ans: false , 
        question : '' 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { chosen  , question} = this.state;
        const { dispatch  } = this.props
        console.log("sdsdsdsd");
        
        dispatch(handleSaveAnswer(question.id, chosen))
        dispatch(handleInitialData() , this.setState({ans:true})) ;
       
    }

        componentDidMount(){
            const id = this.props.match.params.qID
            console.log(id)
            this.setState ({question : this.props.questions[id]} )  
        }
    
    render() {
        const { chosed1, chosed2 , question} = this.state
        const {  users  , authedUser } = this.props
        const user = users[question.author]
        let ans = false 
        if( Object.keys(users[authedUser].answers).includes(question.id)){
            ans = true 
        }
        
        return (
           !ans? (<div style={cardStyle} className="question">
                <div className="header">
                    <h3 align="left" >{user && user.name} asks : </h3>
                </div>
                <div className="questionBody">
                    <div className="avatar">
                        <img src={user && user.avatarURL} class="myAvatar"></img>
                    </div>

                    <div className="questionBody-poll">
                        <h4> Would you rather </h4>
                        <div style={{ 'text-align': 'left' }}  >
                            <input onClick={() => !chosed1 ? this.setState({ chosed1: true, chosen: 'optionOne' }) : {}} type="radio" value="Male" name="gender" /> {question && question.optionOne.text}
                            <br />
                            <hr />
                            <input onClick={() => !chosed2 ? this.setState({ chosed2: true, chosen: 'optionTwo' }) : {}} type="radio" value="Female" name="gender" /> {question && question.optionTwo.text}
                            <br />
                            <br />
                        </div>
                        <Button onClick={this.handleSubmit} disabled={!(chosed1 || chosed2)} className="sign-btn" variant="outlined">Submit</Button>
                    </div>
                </div>

            </div>) : <AnsweredPoll  user = {user} id = {question.id}/>
        )
    }
}

function mapStateToProps({ users, authedUser , questions }) {
    return {
       questions,
       users, 
       user: users[authedUser],
       authedUser

    }
 }

 
export default connect(mapStateToProps)(Poll);
