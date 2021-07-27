import React from 'react'
import LeaderBoardItem from './LeaderBoardItem';
import {connect } from 'react-redux'
class LeaderBoard extends React.Component {
    render(){
        return (
        <div style = {{backgroundColor : 'transparent'}} className = "question-list-container">
           
            <div>
                <ul>
                {
                    this.props.usersID &&(this.props.sortedUsers.map( (user) => ( 
                        <li key = {user.id} >
                             <LeaderBoardItem  user = {this.props.users[user.id]} />
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
       users , 
       sortedUsers : Object.values(users).sort( function (a, b) {
           const al =  Object.keys(a.answers).length + Object.keys(a.questions).length
           const bl =  Object.keys(b.answers).length + Object.keys(b.questions).length
        return bl - al;
      })
    }
 }

export default connect(mapStateToProps)(LeaderBoard)

