import React from 'react'
import { Avatar, Button } from '@material-ui/core'
const question = () => {
    return (
        <div className="question">
            <div className="header">
                <h3 align="left" >Potato asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                    <Avatar style={{ height: '150px' }}  >P</Avatar>
                </div>

                <div className="questionBody-poll">
                    <h4> Would you rather </h4>
                    <p>..smth..</p>
                    <Button className = "sign-btn" variant="outlined">view poll</Button>
                </div>
            </div>

        </div>
    )
}

export default question
