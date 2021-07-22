import React from 'react'
import { Avatar, Button } from '@material-ui/core'
const Poll = () => {
    return (
        <div className="question">
            <div className="header">
                <h3 align="left" >Potato asks : </h3>
            </div>
            <div className="questionBody">
                <div className="avatar">
                    <Avatar style={{ height: '80px' , width:'80px' }}  >P</Avatar>
                </div>

                <div className="questionBody-poll">
                    <h4> Would you rather </h4>
                    <div  style = {{ 'text-align' : 'left'    }}  >
                        <input  type="radio" value="Male" name="gender" /> cheescake
                        <br/>
                        <input  type="radio" value="Female" name="gender" /> applpie
                       
                    </div>
                    <Button className="sign-btn" variant="outlined">Submit</Button>
                </div>
            </div>

        </div>
    )
}

export default Poll
