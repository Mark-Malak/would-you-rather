import React from 'react'
import { Button } from '@material-ui/core'
import Question from './Question';
import Poll from './Poll';
import AnsweredPoll from './AnsweredPoll';
import LeaderBoardItem from './LeaderBoardItem';
import {connect } from 'react-redux'
class LeaderBoard extends React.Component {
    render(){
        return (
        <div style = {{backgroundColor : 'transparent'}} className = "question-list-container">
           
            <div>
                <ul>
                {
                    this.props.usersID &&(this.props.usersID.map( (id) => ( 
                        <li key = {id} >
                             <LeaderBoardItem  user = {this.props.users[id]} />
                        </li>
                       
                    )))
                }
                </ul>
            </div>
        </div>
    )}
}

function mapStateToProps({ users }) {
    return {
       usersID : Object.keys(users) ,
       users
    }
 }

export default connect(mapStateToProps)(LeaderBoard)
