import React  from 'react'
import{connect} from 'react-redux'
class AnsweredPoll extends React.Component {
   
    
    render(){
        //may not load properly after answering question as u would be passing old user and question ??
        const { users, id , authedUser , questions  } = this.props 
        const question = questions[id]
        const author = users[question.author]
        const l1 = question.optionOne.votes.length
        const l2 = question.optionTwo.votes.length
        const total = l1  +  l2 
        // if selectedoption is true then option 1 is selected , else option 2 is selected 
        const selectedoption = question.optionOne.votes.includes(authedUser) ? true : false 
        return (
        <div style = { { margin : 'auto' ,  width : '30%'}} className="question">
            <div className="header">
                <h3 align="left" >{author.name} asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                  <img alt="avatar" src={author.avatarURL} className ="myAvatar2"></img>
                </div>

                <div  className="questionBody-poll">
                    <h2 align="left" > Results: </h2>
                    <div className = { selectedoption ? "yourVote" : "othersVote"} >
                   
                     { selectedoption ? <h4 >your answer</h4> : ''}
                          <p>Would you rather {question.optionOne.text}</p>
                          <progress id="file" max="100" value={ (l1*100/total).toFixed(2)  } / >
                          <label htmlFor="file">{ (l1*100/total).toFixed(2)  }% </label>
                          <p> {l1} out of {total} votes </p>
                    </div>
                  
                    <div className = { !selectedoption ? "yourVote" : "othersVote"}>
                            { !selectedoption ? <h4  >your vote</h4> : ''}
                         
                          <p>Would you rather {question.optionTwo.text}</p>
                          <progress id="file" max="100" value={  (l2*100/total).toFixed(2)} />
                          <label htmlFor="file"> {  (l2*100/total).toFixed(2)}%</label>
                          <p> {l2} out of {total} votes </p>
                    </div>
                   
                </div>
            </div>

        </div>
    )}
}

function mapStateToProps({ users , authedUser , questions }) {
    return {
        questions : questions , 
        users , 
        authedUser
    }
 }
export default connect(mapStateToProps)(AnsweredPoll)
