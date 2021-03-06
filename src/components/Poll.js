import React  from 'react';
import { Button } from '@material-ui/core'
import AnsweredPoll from './AnsweredPoll'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { handleSaveAnswer } from '../actions/shared';
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
      
        dispatch(handleSaveAnswer(question.id, chosen))
        //dispatch(handleInitialData())
        this.setState({ans:true})
    }

        componentDidMount(){
            const id = this.props.match.params.question_id
            console.log(id)
            this.setState ({question : this.props.questions[id]} )  
        }
    
    render() {
        const { chosed1, chosed2 , question} = this.state
        const {  users  , authedUser } = this.props
        
        if(typeof question === 'undefined'){
            return(
                     <div>
                       <h1>404 -Page Not Found! </h1>
                       <Link to="/home">
                          Back to home page
                       </Link>
                    </div>
            )
        }
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
                        <img alt="avatar"  src={user && user.avatarURL} className  ="myAvatar"></img>
                    </div>

                    <div className="questionBody-poll ">
                        <h4> Would you rather </h4>
                        <div style={{ 'textAlign': 'left' }}  >
                            <input onClick={() => !chosed1 ? this.setState({ chosed1: true, chosen: 'optionOne' }) : {}} type="radio" value="Male" name="gender" /> {question && question.optionOne.text}
                            <br />
                            <hr />
                            <input onClick={() => !chosed2 ? this.setState({ chosed2: true, chosen: 'optionTwo' }) : {}} type="radio" value="Female" name="gender" /> {question && question.optionTwo.text}
                           
                        </div>
                        <br/>
                        <br/>
                        <Button onClick={this.handleSubmit} disabled={!(chosed1 || chosed2)} className="sign-btn" variant="outlined">Submit</Button>
                    </div>
                </div>

            </div>) : <AnsweredPoll selectedOption = {this.state.chosen} id = {question.id}/>
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
