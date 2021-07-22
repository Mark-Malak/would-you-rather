import React from 'react'
import { Avatar, Button } from '@material-ui/core'
const LeaderBoardItem = () => {
    return (
        <div>
            <div style = {{width:'100%' } }className="question">

                <div className="questionBody">
                    <div className="avatar">
                        <Avatar style={{ height: '80px', width: '80px' }}  >P</Avatar>
                    </div>

                    <div className = "shadow" style = {{width:'55%' }}>
                        <div >
                            <h2 className="header" style = {{ 'padding-left' : '15px'}} align="left" >Potatoman </h2>
                        </div>
                        <p>Answered questions :      7 </p>
                        <hr />
                        <p>Created questions :      7 </p>
                        
                    </div>

                    <div className = "shadow">
                    <div >
                        <h4 className = "header"> Score</h4>
                    </div>
                        
                        <h1>10</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeaderBoardItem
