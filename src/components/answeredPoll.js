import React  from 'react'

class AnsweredPoll extends React.Component {
    render(){
        //may not load properly after answering question as u would be passing old user and question ??
        const { user , question } = this.props 
        const l1 = question.optionOne.votes.length
        const l2 = question.optionTwo.votes.length
        const total = l1  +  l2 
        return (
        <div style = { { margin : 'auto' ,  width : '30%'}} className="question">
            <div className="header">
                <h3 align="left" >{user.name} asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                  <img src={user.avatarURL} class="myAvatar"></img>
                </div>

                <div  className="questionBody-poll">
                    <h2> Results: </h2>
                    <div>
                          <p>Would you rather {question.optionOne.text}</p>
                          <progress id="file" max="100" value={l1*100/total} / >
                          <label for="file">{l1*100/total}% </label>
                          <p> {l1} out of {total} votes </p>
                    </div>
                  
                    <div>
                          <p>Would you rather {question.optionTwo.text}</p>
                          <progress id="file" max="100" value={l2*100/total} />
                          <label for="file"> {l1*100/total}%</label>
                          <p> {l2} out of {total} votes </p>
                    </div>
                   
                </div>
            </div>

        </div>
    )}
}

export default AnsweredPoll
