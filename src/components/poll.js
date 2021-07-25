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
        ans: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { chosen } = this.state;
        const { dispatch, question } = this.props
        console.log("sdsdsdsd");
        
        dispatch(handleSaveAnswer(question.id, chosen))
        dispatch(handleInitialData() , this.setState({ans:true})) ;
       
    }
    render() {
        const { chosed1, chosed2, ans } = this.state
        const { answered, user, question } = this.props
        return (
           !ans? (<div style={cardStyle} className="question">
                <div className="header">
                    <h3 align="left" >{user.name} asks : </h3>
                </div>
                <div className="questionBody">
                    <div className="avatar">
                        <img src={user.avatarURL} class="myAvatar"></img>
                    </div>

                    <div className="questionBody-poll">
                        <h4> Would you rather </h4>
                        <div style={{ 'text-align': 'left' }}  >
                            <input onClick={() => !chosed1 ? this.setState({ chosed1: true, chosen: 'optionOne' }) : {}} type="radio" value="Male" name="gender" /> {question.optionOne.text}
                            <br />
                            <hr />
                            <input onClick={() => !chosed2 ? this.setState({ chosed2: true, chosen: 'optionTwo' }) : {}} type="radio" value="Female" name="gender" /> {question.optionTwo.text}
                            <br />
                            <br />
                        </div>
                        <Button onClick={this.handleSubmit} disabled={!(chosed1 || chosed2)} className="sign-btn" variant="outlined">Submit</Button>
                    </div>
                </div>

            </div>) : <AnsweredPoll  user = {user} question = {question}/>
        )
    }
}


export default connect()(Poll);
