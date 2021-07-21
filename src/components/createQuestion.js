import React from 'react'
import Card from '@material-ui/core/Card';
const CreateQuestion = () => {
    return (
        <div>
            <Card raised variant = "outlined" spacing = {4}>
                <h1>Create new Question</h1>
                <hr/>
                <p>complete the question : </p>
                <h2>Would you rather...</h2>
                <input placeholder ="Enter option once text here"></input>
                <p>OR</p>
                <input placeholder ="Enter option once text here"></input>
                <hr/>
                <button>Submit</button>

            </Card>
        </div>
    )
}

export default CreateQuestion
