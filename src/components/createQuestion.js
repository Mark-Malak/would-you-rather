import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { handleUsersUpdate } from '../actions/shared';
const cardStyle = {
    margin: 'auto ',
    width: '30%'
}

class CreateQuestion extends React.Component {

    state = {
        opt1: '',
        opt2: ''

    }
    handleChange1 = (e) => {
        const opt1 = e.target.value
        this.setState(() => ({
            opt1
        }))
    }

    handleChange2 = (e) => {
        const opt2 = e.target.value
        this.setState(() => ({
            opt2
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { opt1, opt2 } = this.state
        console.log('options are : ', opt1, opt2)
        const{dispatch} = this.props
        dispatch( handleAddQuestion(opt1 , opt2) )
        dispatch( handleUsersUpdate())
        

        this.setState(() => ({
            opt1: '',
            opt2: ''
        }))
    }

    render() {
        const { opt1, opt2 } = this.state
        return (
            <div>


                <Card style={cardStyle} variant="outlined">
                    <CardContent>
                        <h1>Create new Question</h1>
                        <hr />
                        <p align="left">complete the question : </p>
                        <h2 align="left" >Would you rather...</h2>
                        <input value = {opt1} onChange={this.handleChange1} type="text" size="60" placeholder="Enter option one text here ..."></input>
                        <h3>OR</h3>
                        <input value ={opt2} onChange={this.handleChange2} type="text" size="60" placeholder="Enter option two text here ..."></input>
                        <br/>
                        <hr /> 
                        <br/>
                        <Button disabled = {opt1 === '' || opt2 ===''} onClick={this.handleSubmit} className="sign-btn" variant="outlined" color="#000000"> Submit</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default connect()(CreateQuestion) 